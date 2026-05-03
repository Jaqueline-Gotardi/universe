const express = require('express'); //framework web para node.js
const path = require('path'); //módulo nativo do node.js

//É necessário instalar uma biblioteca dotenv para usar o .env (arquivo deve conter sua chave api, caso precise de uma), abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
//require('dotenv').config({path: path.join(__dirname, '../.env')}); //configurando o dontev para ler o arquivo .env
require('dotenv').config()

const app = express(); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//console.log("E-mail configurado:", process.env.EMAIL_USER);

//para enviar email de confirmação pra caixa de entrada do usuário
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

// Verificação de conexão com o e-mail
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Erro na configuração do e-mail:", error);
  } else {
    console.log("🚀 O servidor de e-mail está pronto para decolar!");
  }
});


const authMiddleware = require('./middleware'); //importando. . .
 
const cors = require('cors'); //para aceitar todas as origens/domínios/portas
//cors é uma biblioteca para o expŕess

const cookieParser = require("cookie-parser");
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, //para permitir que o cookie viage entre o front e o back
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); //para o express ler requisições json
app.use(express.urlencoded({extended : true})); //para o express ler dados de formulários 
 
//importar pool (lá do DB. . .)
const pool = require('./db_config');

//acessando a pasta public, pra iniciar a conexão do front com o back local
app.use(express.static(path.join(__dirname, '../public')));
 


//ROTA DE REGISTRAR DADOS DO USUÁRIO
app.post('/register', async (req, res) => {
    //console.log('1. Requisição de registro recebida')
    const { username, email, password } = req.body;
    /* const username = req.body.username;
   const email= req.body.email;
   const password = req.body.password; */

    //console.log('2. Dados do corpo', {username, email, password});
   
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
   const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const extensoesProibidas = [".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip"];
   
   const temExtensaoProibida = extensoesProibidas.some(ext => email.toLowerCase().endsWith(ext));

   if (!emailRegex.test(email) || temExtensaoProibida) {
    return res.status(400).json({ message: "Formato de e-mail inválido ou extensão de arquivo não permitida!" });
   }

   //verificar duplicidade de dados no banco de dados
   try {
    //console.log('3. Verificando duplicidade de usuário/email...')
    const queryText = `SELECT * FROM users 
                       WHERE email = $1 OR username = $2`;
    const verificarDuplicidade = await pool.query(queryText, [email, username]); //extraindo email e username

    console.log('4. Resultado da verificação de duplicidade:', verificarDuplicidade.rows)
    
    //verificar se tem algo
    if (verificarDuplicidade.rows.length > 0) {
        res.status(409).json({ message: 'Usuário ou email já cadastrado'})
        return;   
    }
} catch (error) {
    console.log('5. Erro ao verificar duplicidade no banco de dados:', error)
    res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.', details: error.message});
    return;
}

//criptografando a senha
//console.log('6. Criptografando a senha. . .')
 const senhaCriptografada = await bcrypt.hash(password, 10); //o "10" é o número de voltas que o bcriptjs dará para fechar o 'cadeado' (é como uma camada extra de proteção de senha para dificultar ataques. . .)
 //console.log('7. Senha criptografada')

 const verificationToken = crypto.randomBytes(32).toString("hex"); //gerar um código único

 try {
    const queryInsert = `INSERT INTO users (username, email, password, verification_token) 
                        VALUES ($1, $2, $3, $4) RETURNING id`
    const result = await pool.query(queryInsert,[username, email, senhaCriptografada, verificationToken]) 

    if (result.rows.length === 1) {
        //enviar o email de confirmação
        const urlConfirmacao = `http://127.0.0.1:3000/verify-email?token=${verificationToken}`;

        const mailOptions = {
            from: '"Universe Base Control" <universe.base.st@gmail.com>',
            to: email,
            subject: "🚀 Confirme sua identidade, Agente",
            html: ` 
            <div style="font-family: sans-serif; background-color: #0b0d17; color: white; padding: 20px; border-radius: 10px;">
            <h1 style="color: #7b2cbf;">Bem-vindo ao Universe, ${username}!</h1>
            <p>Sua conta foi criada. Para autorizar o acesso à base, clique no botão abaixo:</p>
            <a href="${urlConfirmacao}" style="background-color: #7b2cbf; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Confirmar Identidade</a>
            <p style="margin-top: 20px; font-size: 12px; color: #888;">Se você não solicitou este acesso, ignore este e-mail.</p>
            </div>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({message: "Agente cadastrado! Verifique sua caixa de entrada para confirmar sua identidade."})
    }
 } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.'})
    return;
 }
})

//ROTA PARA CONFIRMAR A IDENTIDADE DO USUÁRIO AO CADASTRAR
app.get("/verify-email", async(req, res) => {
    const { token } = req.query;

    try {
        const query = `UPDATE users SET is_verified = true, verification_token = null
                       WHERE verification_token = $1 RETURNING username`;
        const result = await pool.query(query, [token]);
        
        //se pelo menos 1 linha tiver sido inserida no banco. . .
        if (result.rows.length === 1) {
            res.send(`
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
            <a href="http://localhost:5173/login?verified=true" style="display: inline-block; margin-top: 30px; background-color: #7b2cbf; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">IR PARA O LOGIN</a>
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
app.get("/auth/verify", authMiddleware, (req, res) => {
    res.status(200).json({ authMiddleware: true, user: req.user });
});

//ROTA DE LOGIN DO USUÁRIO
app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    /* const email = req.body.email;
    const password = req.body.password; */

    if (!email || email.trim() === ''
        || !password || password.trim() === '') {
            res.status(400).json({ message: 'Email e senha são obrigatórios.'})
            return;
    }

    try {
        const queryUser = `SELECT * FROM users
                           WHERE email = $1`;
        const verificarUsers = await pool.query(queryUser,[email]); 

        //verificar se o usuário foi encontrado. . .
        if (verificarUsers.rows.length > 0) { //se usuário for encontrado. . .

            const user = verificarUsers.rows[0]; //só entra se estiver a identidade confirmada via e-mail
            if (!user.is_verified) {
                return res.status(403).json({ message: "📡 Acesso negado. Confirme seu e-mail antes de entrar na base!" });
            }

            const compararSenha = await bcrypt.compare(password, user.password); //"compare" é para verificar se a senha digitada pelo usuário corresponde ao hash armazenado no banco

            //se a senha estiver certa. . .
            if (compararSenha === true) { //se senha estiver correta
            const chaveJwt = process.env.JWT_SECRET;

            const token = jwt.sign({ id: user.id, email: user.email }, chaveJwt, { expiresIn: "24h" }); //gera token
            res.cookie("token", token, {
                httpOnly: true, //impedir que roubem o código ou acessem o token
                secure: false, //enviar a conexão via http (localmente)
                sameSite: "lax", //impede que sites maliciosos consigam disparar ações usando sua aba
                maxAge: 24 * 60 * 60 * 1000 //tempo de vida do cookie (24horas)
            });

            console.log('Login bem sucedido!')
            res.status(200).json({message: 'Login bem-sucedido!', token: token}); //envia token pro front
            return;

            } else {
                 console.log('Senha inválida!');
            res.status(401).json({message: 'Senha inválida!'});
            return;
            }

        } else { //se usuário não for encontrado. . .
            console.log('Usuário não encontrado');
            res.status(401).json({message: 'Credenciais inválidas'});
            return;
        } 

    } catch(error) { //erro inesperado do servidor
        console.log('Falha ao conectar ao banco de dados, tente novamante mais tarde:', error)
        res.status(500).json({message: 'Erro interno do servidor. Tente novamente mais tarde. . .'})
    }
})


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

            const updateQuery = `UPDATE users SET reset_token = $1
                                 WHERE email = $2`;
            await pool.query(updateQuery, [resetToken, email]);

            const urlReset = `http://localhost:5173/reset-password?token=${resetToken}`;

            const mailOptions = { 
                from: '"Universe Base Control" <universe.base.st@gmail.com>',
                to: email,
                subject: "🛰️ Coordenadas de Recuperação de Acesso",
                html: `
                <div style="font-family: sans-serif; background-color: #0b0d17; color: white; padding: 20px; border-radius: 10px;">
                <h1 style="color: #7b2cbf;">Comandante ${username},</h1>
                <p>Recebemos um pedido para redefinir sua senha de acesso à base Universe.</p>
                <p>Clique no botão abaixo para configurar uma nova senha:</p>
                <a href="${urlReset}" style="background-color: #7b2cbf; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Redefinir Senha</a>
                <p style="margin-top: 20px; font-size: 12px; color: #888;">Este link é temporário. Se não foi você, proteja seus dados e ignore este e-mail.</p>
                </div>
            `}

            await transporter.sendMail(mailOptions);
            return res.status(200).json({message: "E-mail de recuperação enviado com sucesso!"});
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
        //verificar se existe um usuário com esse token
        const queryUser = `SELECT id FROM users 
                           WHERE reset_token = $1`;         
        const userResult = await pool.query(queryUser, [token]);

        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: "Token inválido ou expirado." });
        }

        //criptografar a nova senha
        const salt = await bcrypt.genSalt(10);
        const senhaCriptografada = await bcrypt.hash(novaSenha, salt);

        //atualizar a senha e limpar o token para que não possa ser usado de novo
        const updateQuery = ` UPDATE users 
                              SET password = $1, reset_token = null 
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
   

//ROTA SEARCH (PARA BUSCAR OS DADOS NA API...)
    //app.get('/search', authMiddleware, async(req, res) => {
        app.get('/search', async(req, res) => {
        const title = req.query.title || '';
        const q = title?.trim();
        const isAPOD = /APOD|foto do dia|astronomia/i.test(q) || q.length === 0;

        let resultadosFinais = [];

        //BUSCAR DADOS NA API APOD. . .
        if (isAPOD) {
            try {
                console.log('Tentando API APOD. . .');
                const respostaComChave = await fetch(`https://api.nasa.gov/planetary/apod?&api_key=${process.env.API_KEY}`);

                if (!respostaComChave.ok) {
                    throw new Error(`Resposta da API APOD falhou com status: ${respostaComChave.status}`);
                }

                const dadosComChave = await respostaComChave.json();

                if (dadosComChave.url) {
                    console.log('Dados encontrados na APOD. Formatando e adicionando. . .');
                    const resultadosDaApod = [{
                        source: 'APOD',
                        title: dadosComChave.title || 'Sem título (APOD)',
                        date_created: dadosComChave.date || 'Sem data',
                        location: 'Espaço',
                        description: dadosComChave.explanation || 'Sem descrição',
                        href: dadosComChave.media_type === 'image' ? dadosComChave.hdurl || dadosComChave.url : dadosComChave.url
                    }];
                    resultadosFinais.push(...resultadosDaApod);
                    res.json(resultadosFinais);
                } else {
                    console.log('APOD não retornou dados concretos. Seguindo para a gratuita. . .');
                    await getNasaImages();
                }
            } catch (erro) {
                console.log('Erro ao acessar API APOD (mas seguindo para a API gratuita):', erro);
                await getNasaImages();
            }
        } else {
            //chama a função para buscar images se APOD não for chamado
            await getNasaImages();
        }

        //BUSCAR DADOS NA API GRATUITA. . .

        async function getNasaImages() {
        try {
            console.log('Chamando API NASA Images (Gratuita)...');
            const respostaGratuita = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
            const dadosGratuitos = await respostaGratuita.json();

            const resultadosDaImages = dadosGratuitos.collection.items
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
            resultadosFinais.push(...resultadosDaImages);
        } catch (erro) {
            console.log('Erro na API Images:', erro);
        }

        if (resultadosFinais.length > 0) {
            res.json(resultadosFinais)
        } else {
            res.status(404).json({ error: 'Nenhum resultado encontrado em nenhuma das APIs. . .' });
        }
    }
    });

//inicia o servidor na porta 3000
app.listen(3000, () => { 
    console.log('Servidor em execução em http://localhost:3000/');
});






//TENTATIVAS DE EMAIL (TODOS JÁ TEM DONO)
/* 
1. base.universe.control@gmail.com
2. universe.base.hq@gmail.com
3. universe.base@gmail.com
4. universe.base.st@gmail.com
5. base.universe.st@gmail.com
6. base_universe@gmail.com 
7. base.universe.core@gmail.com
8. universe.base.core@gmail.com
9. base.universe.tech@gmail.com
10. universe.base.tech@gmail.com
11. central.universe.st@gmail.com
12. universe.st@gmail.com
13. universe@gmail.com
14. universeBase.st@gmail.com
15. baseUniverse.st@gmail.com
16. universeBase.hq@gmail.com
17. baseUniverse.hq@gmail.com
18. universe.hq@gmail.com
19. universe.central.st@gmail.com
20. universe.central.hq@gmail.com
21. universe.portal.st@gmail.com
22. portalUniverse.st@gmail.com
23. universePortal.st@gmail.com
24. universeBase@gmail.com

//deu certo esse aqui ...
25. universe.base.st@gmail.com 
*/