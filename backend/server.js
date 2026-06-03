const express = require('express'); //framework web para node.js
const path = require('path'); //módulo nativo do node.js

//É necessário instalar uma biblioteca dotenv para usar o .env (arquivo deve conter sua chave api, caso precise de uma), abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
require('dotenv').config() //configurando o dontev para ler o arquivo .env

const app = express(); 
app.set('trust proxy', 1); //para confiar no proxy e permitir o uso de cookies seguros mesmo atrás de um proxy.

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const nodemailer = require("nodemailer");
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
const crypto = require("crypto");
const helmet = require('helmet'); //segurança contra vulnerabilidades comuns na web
const rateLimit = require('express-rate-limit'); //proteção contra ataques de força bruta

const generalLimiter = rateLimit({ //limitador para a navegação
    windowMs: 15 * 60 * 1000, 
    max: 150 //numero de requisições permitido por IP
});

const authLimiter = rateLimit({ //para limitar o número de requisições para login e recuperação de senha
    windowMs: 15 * 60 * 1000, 
    max: process.env.NODE_ENV === 'production' ? 5:50, //limite  tentativas de login/recuperação a cada 15minutos
    message: { message: "Protocolo de segurança ativado: muitas tentativas de acesso. Aguarde 15 minutos." }
});

app.use(helmet({ //adicionando camadas de segurança com o helmet
    crossOriginResourcePolicy: { policy: "cross-origin"},
    contentSecurityPolicy: false,
}));

app.use('/login', authLimiter);
app.use('/password-recovery', authLimiter);
app.use(generalLimiter); //ativando limitador global

const requiredEnvVars = [
  'JWT_SECRET',
  'EMAIL_USER',
  'EMAIL_PASS',
  'API_KEY'
];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
const hasFatiado = process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_HOST && process.env.DB_NAME && process.env.DB_PORT;
const hasUnificado = process.env.DATABASE_URL;

if (missingEnvVars.length > 0 || (!hasFatiado && !hasUnificado)) {
  console.error(`❌ Variáveis de ambiente ausentes ou configuração de banco incompleta. Vars faltando: ${missingEnvVars.join(', ')}`);
  process.exit(1); //para interromper a execução do servidor se as variáveis de ambiente estiverem faltando ou se o banco de dados não estiver configurado corretamente.
}

const API_KEY = process.env.API_KEY;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';
const COOKIE_SECURE = process.env.NODE_ENV === 'production';

//configuração do Nodemailer 
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, //senha de app
//     }
// })

const authMiddleware = require('./middleware'); //importando. . .
const cors = require('cors'); //para aceitar todas as origens/domínios/portas
//cors é uma biblioteca para o express
const cookieParser = require("cookie-parser");

app.use(cookieParser())

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true, //para permitir que o cookie viage entre o front e o back
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: '10mb' })); //para o express ler dados em formato JSON (como os dados de cadastro, login) e limitar o tamanho da requisição para evitar sobrecarga do servidor
app.use(express.urlencoded({ extended: true, limit: '10mb' })); //para o express ler dados de formulários e limitar o tamanho da requisição
 
//importar pool (lá do DB. . .)
const pool = require('./db_config');

//acessando a pasta public, pra iniciar a conexão do front com o back local
app.use(express.static(path.join(__dirname, '../public')));
 

//ROTA DE REGISTRAR DADOS DO USUÁRIO
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
   
   //verificar se existem ou se estão vazios. . .
   if (!username || username.trim() === '' 
     || !email || email.trim() === '' 
     || !password || password.trim() === '') {
    res.status(400).json({ message: 'Todos os campos (username, email, password) são obrigatórios!'})
    return;
   }

   //para não aceitar nomes com mais de 50 caracteres
   if (username.length > 50) {
    return res.status(400).json({message: "O nome de usuário deve ter no máximo 50 caracteres!"})
   }

   //aceitar username apenas com letras e números
   const usernameRegex = /^[a-zA-Z0-9 ]+$/;
   if (!usernameRegex.test(username)) {
    return res.status(400).json({ message: "O nome de agente deve conter apenas letras e números, sem símbolos ou extensões!" });
   }
 
   //para aceitar somente formato de email válido
   const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
   const extensoesProibidas = [".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip"];
   const temExtensaoProibida = extensoesProibidas.some(ext => email.toLowerCase().endsWith(ext));

   if (!emailRegex.test(email) || temExtensaoProibida) {
    return res.status(400).json({ message: "Formato de e-mail inválido ou extensão de arquivo não permitida!" });
   }

   //verificar duplicidade de dados no banco de dados
   try {
    const queryText = `SELECT * FROM users 
                       WHERE email = $1 OR username = $2`;
    const verificarDuplicidade = await pool.query(queryText, [email, username]); //extraindo email e username
    
    //verificar se tem algo
    if (verificarDuplicidade.rows.length > 0) {
        res.status(409).json({ message: 'Usuário ou email já cadastrado'})
        return;   
    }
} catch (error) {
    console.error("Erro no registro", error.message);
    res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.'});
    return;
}

//criptografando a senha
 const senhaCriptografada = await bcrypt.hash(password, 10); //o "10" é o número de voltas que o bcriptjs dará para fechar o 'cadeado' (é como uma camada extra de proteção de senha para dificultar ataques. . .)

 const verificationToken = crypto.randomBytes(32).toString("hex"); //gerar um código único

 try {
    const queryInsert = `INSERT INTO users (username, email, password, verification_token) 
                        VALUES ($1, $2, $3, $4) RETURNING id`
    const result = await pool.query(queryInsert,[username, email, senhaCriptografada, verificationToken]) 

    if (result.rows.length === 1) {
        //enviar o email de confirmação
        const urlConfirmacao = `${SERVER_URL}/verify-email?token=${verificationToken}`;

        const mailOptions = {
            from: process.env.EMAIL_FROM || '"Universe Base Control" <universe.base.st@gmail.com>',
            to: email,
            subject: "🚀 Confirme sua identidade, Agente",
            html: ` 
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #05070a; color: #ffffff; padding: 40px; text-align: center; border-radius: 15px">
            <div style="max-width: 600px; margin: 0 auto; background-color: #0b0d17; border: 1px solid #7b2cbf; border-radius: 15px; padding: 30px; box-shadow: 0 0 20px rgba(123, 44, 191, 0.2);">
            <h1 style="color: #9d4edd; margin-bottom: 20px;">Bem-vindo à Base, Agente ${username}!</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #d1d1d1;">
            Sua credencial foi gerada com sucesso. Para autorizar o acesso total aos sistemas do <strong>Universe</strong>, precisamos confirmar sua identidade estelar.
            </p>
            <div style="margin: 40px 0;">
            <a href="${urlConfirmacao}" style="background-color: #7b2cbf; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(123, 44, 191, 0.4);">AUTORIZAR ACESSO</a>
            </div>
            <p style="font-size: 14px; color: #888;">
            Se você não iniciou este protocolo de cadastro, ignore esta transmissão.
            </p>
            <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;">
            <p style="font-size: 12px; color: #555;">Universe Base Control | Setor de Segurança Cibernética</p>
            </div>
        </div>
            `
        };

        try {
            await resend.emails.send({
                from: 'Universe Base Control <onboarding@resend.dev>',
                to: email,
                subject: "🚀 Confirme sua identidade, Agente",
                html: mailOptions.html
            });
            //await transporter.sendMail(mailOptions);
            return res.status(201).json({message: "Agente cadastrado! Verifique sua caixa de entrada ou spam para confirmar sua identidade."});
        } catch (emailError) {
            console.error("Erro ao enviar e-mail via Nodemailer:", emailError);
            return res.status(201).json({message: "Conta criada, mas houve um problema na transmissão do e-mail de confirmação."});
        }
    }
} catch (error) {
    console.error("Erro no servidor ao registrar usuário:", error);
    return res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.'});
}
});


//ROTA PARA CONFIRMAR A IDENTIDADE DO USUÁRIO AO CADASTRAR
app.get("/verify-email", async(req, res) => {
    const { token } = req.query;

    try {
        const query = `UPDATE users SET is_verified = true, verification_token = null
                       WHERE verification_token = $1 RETURNING username`;
        const result = await pool.query(query, [token]);
        
        //se pelo menos 1 linha tiver sido inserida no banco. . .
        if (result.rows.length === 1) {
            return res.send(`
            <style>
            * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
            }
            body { 
            background-color: #0b0d17; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            font-family: 'Segoe UI', sans-serif; 
            overflow: hidden; 
            }
            </style>
            <div style="text-align: center; color: white; border: 2px solid #7b2cbf; padding: 40px; border-radius: 20px; background: rgba(123, 44, 191, 0.1); box-shadow: 0 0 30px rgba(123, 44, 191, 0.3);">
            <h1 style="color: #7b2cbf; font-size: 2rem; margin-bottom: 20px;">🚀 Identidade Confirmada!</h1>
            <p>Agente <strong>${result.rows[0].username}</strong>, seu acesso à base Universe foi autorizado.</p>
            <a href="${FRONTEND_URL}/login?verified=true" style="display: inline-block; margin-top: 30px; background-color: #7b2cbf; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">IR PARA O LOGIN</a>
            </div>
            `)
        } else {
            res.status(400).send(`
                <div style="background-color: #0b0d17; color: white; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif;">
                  <h1 style="color: #ff4d4d;">❌ Erro: Token inválido ou já utilizado.</h1>
                </div>
            `)
        }
    } catch (error) {
        res.status(500).send("❌ Erro ao interno ao processar verificação.")
    }
});


//ROTA PARA VERIFICAR SE O COOKIE AINDA É VÁLIDO (SE O USUÁRIO AINDA ESTÁ AUTENTICADO)
app.get("/auth/verify", authMiddleware, async (req, res) => {
    try {
        const query = `SELECT id, email, username, avatar, bio, interests FROM users WHERE id = $1`;
        const result = await pool.query(query, [req.user.id]);
        
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Usuário não encontrado." });
        }
        return res.status(200).json({ authMiddleware: true, user: result.rows[0] }); //para o front saber que a autenticação foi verificada e passar os dados do agente para o front
    } catch (error) {
        console.error("Erro ao verificar sessão:", error);
        return res.status(500).json({ message: "Erro interno." });
    }
});


//ROTA DE LOGIN DO USUÁRIO
app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    if (!email || email.trim() === '' || !password || password.trim() === '') {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.'})
    }

    try {
        const queryUser = `SELECT * FROM users
                           WHERE email = $1`;
        const verificarUsers = await pool.query(queryUser,[email]); 

        //verificar se o usuário foi encontrado. . .
        if (verificarUsers.rows.length > 0) { //se usuário for encontrado. . .

            const user = verificarUsers.rows[0]; //só entra se estiver a identidade confirmada via e-mail
            if (!user.is_verified) {
                return res.status(403).json({ 
                    message: "📡 Acesso negado. Enviamos um código de autorização para seu e-mail. Confirme-o para entrar na base!" 
                });
            }

            const compararSenha = await bcrypt.compare(password, user.password); //"compare" é para verificar se a senha digitada pelo usuário corresponde ao hash armazenado no banco

            //se a senha estiver certa. . .
            if (compararSenha === true) { //se senha estiver correta
            const chaveJwt = process.env.JWT_SECRET;
            if (!chaveJwt) {
              return res.status(500).json({ message: 'Erro de configuração do servidor. Tente novamente mais tarde.' });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, chaveJwt, { expiresIn: JWT_EXPIRES_IN }); //gera token
            res.cookie("token", token, {
                httpOnly: true, //impedir que roubem o código ou acessem o token
                secure: COOKIE_SECURE, //usar seguro em produção
                sameSite: COOKIE_SECURE ? "none" : "lax",
                maxAge: 24 * 60 * 60 * 1000 //tempo de vida do cookie (24horas)
            });

            return res.status(200).json({ message: 'Login bem-sucedido!', user: { id: user.id, email: user.email, username: user.username, avatar: user.avatar, bio: user.bio, interests: user.interests } });
            } else {
            return res.status(401).json({message: 'Senha inválida!'});
            }

        } else { //se usuário não for encontrado. . .
            return res.status(401).json({message: 'Credenciais inválidas'});
        } 

    } catch(error) { //erro inesperado do servidor
        console.error('Falha ao conectar ao banco de dados, tente novamente mais tarde:', error)
        return res.status(500).json({message: 'Erro interno do servidor. Tente novamente mais tarde. . .'})
    }
});


//ROTA DE RECUPERAÇÃO DE SENHA
app.post('/password-recovery', async(req, res) => {
    const { email } = req.body;

    if (!email || email.trim() === '') {
        return res.status(400).json({message: "O e-mail é obrigatório para a recuperação."});
    }

    try {
        //verificar se o email existe no bd
        const queryUser = `SELECT * FROM users
                           WHERE email = $1`;
        const result = await pool.query(queryUser, [email]);

        if (result.rows.length > 0) {
            const username = result.rows[0].username;
            const resetToken = crypto.randomBytes(32).toString("hex");
            const expires = new Date(Date.now() + 3600000); //token válido por 1 hora

            const updateQuery = `UPDATE users SET reset_token = $1,
                                 reset_token_expires = $2
                                 WHERE email = $3`;
            await pool.query(updateQuery, [resetToken, expires, email]);

            const urlReset = `${FRONTEND_URL}/reset-password?token=${resetToken}`;

            const mailOptions = { 
                from: '"Universe Base Control" <universe.base.st@gmail.com>',
                to: email,
                subject: "🛰️ Coordenadas de Recuperação de Acesso",
                html: `
            <div style="font-family: 'Segoe UI', sans-serif; background-color: #05070a; color: #ffffff; padding: 40px; text-align: center; boder-radius: 15px">
                <div style="max-width: 600px; margin: 0 auto; background-color: #0b0d17; border: 1px solid #ff4d4d; border-radius: 15px; padding: 30px;">
                <h1 style="color: #ff4d4d; margin-bottom: 20px;">Protocolo de Recuperação</h1>
                <p style="font-size: 16px; color: #d1d1d1;">
                Comandante ${username}, detectamos uma solicitação para redefinir suas coordenadas de acesso.
                </p>
                <p style="font-size: 14px; color: #aaa; margin-bottom: 30px;">
                Clique no botão abaixo para configurar uma nova chave de criptografia:
                </p>
                <a href="${urlReset}" style="background-color: #ff4d4d; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">REDEFINIR SENHA</a>
                <p style="margin-top: 40px; font-size: 11px; color: #666;">
                Este link expirará em breve. Caso não tenha solicitado, contate a Base Control imediatamente.
                </p>
                </div>
            </div>
            `};

            try {
                //await transporter.sendMail(mailOptions); //enviar email de recuperação para o agente
                await resend.emails.send({
                    from: 'Universe Base Control <onboarding@resend.dev>',
                    to: email,
                    subject: mailOptions.subject,
                    html: mailOptions.html
                });
                return res.status(200).json({message: "E-mail de recuperação enviado com sucesso!"});
            } catch (errorEmail) {
                console.error("Erro no envio do e-mail de recuperação:", errorEmail);
                return res.status(500).json({message: "Erro ao disparar e-mail de recuperação mecânica."});
            }
        } else {
            return res.status(404).json({message: "E-mail não encontrado na nossa base estelar."})
        }
    } catch (error) {
        return res.status(500).json({message: "Erro interno no servidor. Tente novamente mais tarde."})
    }
})


//ROTA PARA CONFIRMAR A RECUPERAÇÃO DE SENHA (APÓS O CLIQUE NO E-MAIL)
app.post("/reset-password", async (req, res) => {
    const { token, novaSenha } = req.body; 
    
    if (!token || !novaSenha) {
        return res.status(400).json({ message: "Dados incompletos: Token e nova senha são obrigatórios." });
    }

    try {
        //verificar se existe um usuário with esse token
        const queryUser = `SELECT id,
                           password FROM users 
                           WHERE reset_token = $1 AND reset_token_expires > NOW()`;         
        const userResult = await pool.query(queryUser, [token]);

        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: "Token inválido ou expirado. Peça uma nova recuperação de senha." });
        }

        const senhaIgual = await bcrypt.compare(novaSenha, userResult.rows[0].password);
        if (senhaIgual) {
            return res.status(400).json({ message: "A nova senha não pode ser igual à senha anterior." });
        }

        //criptografar a nova senha
        const salt = await bcrypt.genSalt(10); //embaralhar a senha para dificultar ataques de força bruta
        const senhaCriptografada = await bcrypt.hash(novaSenha, salt);

        //atualizar a senha e limpar o token para que não possa ser usado de novo
        const updateQuery = ` UPDATE users 
                              SET password = $1, 
                              reset_token = null,
                              reset_token_expires = null
                              WHERE reset_token = $2 `;
        await pool.query(updateQuery, [senhaCriptografada, token]);

        return res.status(200).json({ message: "Senha redefinida com sucesso! Você já pode voltar para a base." });

    } catch (error) {
        console.error("Erro ao redefinir senha:", error);
        return res.status(500).json({ message: "Erro interno no servidor espacial." });
    }
});


//ROTA DE TROCAR SENHA
app.post('/change-password', authMiddleware, async(req, res) => {
    const { senhaAtual, novaSenha } = req.body;
    const userId  = req.user.id;

    if (!senhaAtual.trim() || !novaSenha.trim()) {
        return res.status(400).json({message: "Dados incompletos. Preencha corretamente!"});
    }

    if (senhaAtual === novaSenha) {
        return res.status(400).json({message: "A nova senha não pode ser igual a senha atual."})
    }

    try {
        const queryUser = `SELECT * FROM users
                           WHERE id = $1`;
        const result = await pool.query(queryUser, [userId]);

        if (result.rows.length === 0) {
            return res.status(404).json({message: "Usuário não encontrado no cosmos!"});
        }

        const user = result.rows[0];
        const senhaValida = await bcrypt.compare(senhaAtual, user.password);

        if(!senhaValida) {
            return res.status(401).json({message: "Senha atual incorreta!"})
        }

        const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
        const updateQuery = `UPDATE users SET password = $1 WHERE id = $2`;
        await pool.query(updateQuery, [novaSenhaHash, userId]);

        return res.status(200).json({message: "Senha atualizada com sucesso!"})
    } catch(error) {
        console.error("Erro na troca de senha:", error);
        return res.status(500).json({message: "Erro interno no servidor"})
    }
})


//ROTA PARA BUSCAR TODOS OS AGENTES DO UNIVERSE
app.get('/agents', authMiddleware, async (req, res) => {
    try {
        const query = `SELECT username, bio, interests, avatar FROM users WHERE is_verified = true ORDER BY id DESC`;
        const result = await pool.query(query);
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erro ao buscar agentes:", error);
        return res.status(500).json({ message: "Erro interno ao buscar a tripulação." });
    }
});


//ROTA PARA BUSCAR OS DADOS DO AGENTE LOGADO (PERFIL)
app.get('/profile', authMiddleware, async (req, res) => {
    try {
        const query = `SELECT username, email, bio, interests, avatar FROM users WHERE id = $1`;
        const result = await pool.query(query, [req.user.id]);
        
        if (result.rows.length > 0) {
            return res.status(200).json(result.rows[0]);
        } else {
            return res.status(404).json({ message: "Agente não encontrado." });
        }
    } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        return res.status(500).json({ message: "Erro interno no centro de comando." });
    }
});


//ROTA PARA SALVAR AS EDIÇÕES DE PERFIL DE AGENTE
app.put('/update-profile', authMiddleware, async (req, res) => {
    const { username, bio, interests, avatar } = req.body;
    const userId = req.user.id;

    try {
        const updateQuery = `
          UPDATE users 
          SET username = $1, bio = $2, interests = $3, avatar = $4 
          WHERE id = $5
        `;
        await pool.query(updateQuery, [username, bio, interests, avatar, userId]);
        
        return res.status(200).json({ message: "Perfil atualizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
        return res.status(500).json({ message: "Erro interno ao salvar no banco cósmico." });
    }
});


//ROTA SEARCH (PARA BUSCAR OS DADOS NA API...)
    app.get('/search', authMiddleware, async(req, res) => {
        const title = req.query.title || '';
        const q = title?.trim();
        
        //se a busca for vazia ou contiver palavras-chave da APOD
        const isAPOD = !q || /APOD|foto do dia|astronomia/i.test(q);
        let resultadosFinais = [];

        //função interna para buscar na API gratuita da NASA (Images)
        async function getNasaImages(searchTerm) {
            try {
                const searchQ = searchTerm || 'nebula'; //fallback para busca vazia
                const respostaGratuita = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(searchQ)}`);
        
                if (!respostaGratuita.ok) return [];
                const dadosGratuitos = await respostaGratuita.json();

                if (dadosGratuitos.collection && dadosGratuitos.collection.items) {
                    return dadosGratuitos.collection.items
                        .filter(item =>
                            item.data &&
                            item.links &&
                            item.links.some(link => link.render === 'image')
                        )
                        .map(item => ({
                            source: 'IMAGES',
                            title: item.data[0].title,
                            date_created: item.data[0].date_created || 'Sem data',
                            location: item.data[0].location || 'Sem localização',
                            description: item.data[0].description || 'Sem descrição',
                            href: item.links.find(link => link.render === 'image').href
                        }));
                }
                return [];
            } catch (erro) {
                console.error('Erro na API Images:', erro);
                return [];
            }
        }

        // 1. Tentar buscar na API APOD se for o caso
        if (isAPOD) {
            try {
                const respostaComChave = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
                
                if (respostaComChave.ok) {
                    const dadosComChave = await respostaComChave.json();
                    if (dadosComChave.url) {
                        resultadosFinais.push({
                            source: 'APOD',
                            isApod: true, //tag para o frontend identificar
                            title: dadosComChave.title || 'Sem título (APOD)',
                            date_created: dadosComChave.date || 'Sem data',
                            location: 'Espaço',
                            description: dadosComChave.explanation || 'Sem descrição',
                            href: dadosComChave.media_type === 'image' ? dadosComChave.hdurl || dadosComChave.url : dadosComChave.url
                        });
                    }
                }
            } catch (erro) {
                console.error('Erro ao acessar API APOD:', erro);
            }
        }

        // 2. Buscar também na API de Imagens (ou se APOD falhar/não for solicitada)
        const imagensNasa = await getNasaImages(q);
        resultadosFinais.push(...imagensNasa);

        // 3. Responder
        if (resultadosFinais.length > 0) {
            return res.json(resultadosFinais);
        } else {
            return res.status(404).json({ error: 'Nenhum resultado encontrado em nenhuma das APIs. . .' });
        }
    });


//ROTA DE DELETAR CONTA
app.delete('/delete-account', authMiddleware, async (req, res) => {
    try {
        const deleteQuery = `DELETE FROM users WHERE id = $1`;
        await pool.query(deleteQuery, [req.user.id]);
        res.clearCookie("token");
        return res.status(200).json({message: "Conta deletada com sucesso, agente!"});
    } catch (error) {
        console.error("Erro ao deletar conta:", error);
        return res.status(500).json({message: "Erro interno do servidor. Tente novamente mais tarde."});
    } 
})

module.exports = app; //exportando o app para usar em outros arquivos para rodar o servidor.

const PORT = process.env.PORT || 10000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor Universe em execução em ${SERVER_URL}`);
    });
}