/* VERSÃO DO SERVIDOR HTTP MANUAL (SEM EXPRESS)
const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros

const server = http.createServer(async (req, res) => { 
    res.setHeader('Content-type', 'application/json'); //indica o formato da resposta
    //para autorizar o navegador a acessar as requisições vindas do Front
    res.setHeader("Access-Control-Allow-Origin", "*"); //o "*" permite rodar o servidor de qualquer origem
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); //acessar os métodos
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Accept, X-Requested-With");  //acessar o cabeçalho

    //para permitir a navegação no servidor
    if (req.method === "OPTIONS") {
        res.statusCode = 200;
        res.end();
        return;
    }

    async function receberDados() { 
        const queryParams = req.url.split('?')[1]; //para acessar o que vem depois do "?" da url
        const params = new URLSearchParams(queryParams);
        const title = params.get('title') || ''; //pegando o parâmetro
        const q = title?.trim();
        const isAPOD = /APOD|foto do dia|astronomia/i.test(q) || q.length === 0; //verifica se o campo está vazio ou se tem o termo APOD, para chamar a API

        let resultadosFinais = []; //array q vai guardar todos os resultados (apod + gratuita)

        //BUSCAR DADOS NA API APOD
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
                } else {
                    console.log('APOD não retornou dados concretos. Seguindo para a gratuita. . .');
                }
            } catch (erro) {
                console.log('Erro ao acessar API APOD (mas seguindo para a API gratuita):', erro);
            }
        }

        //BUSCAR DADOS NA API GRATUITA. . .
        try {
            console.log('Chamando API NASA Images (Gratuita)...');
            const respostaGratuita = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
            const dadosGratuitos = await respostaGratuita.json();

            //filtra e formata resultados da API grátis (a que não usa chave)
            const resultadosDaImages = dadosGratuitos.collection.items //cada API tem sua própria 'estrutura'
                .filter(item =>
                    item.data &&
                    item.links &&
                    item.links.some(link => link.render === 'image')
                )

                //transforma os dados da NASA num formato que o front entende.
                .map(item => ({
                    source: 'IMAGES',
                    title: item.data[0].title,
                    date_created: item.data[0].date_created || 'Sem data', //fallback
                    location: item.data[0].location || 'Sem localização', //fallback
                    description: item.data[0].description || 'Sem descrição', //fallback
                    href: item.links.find(link => link.render === 'image').href //fallback
                }));
            resultadosFinais.push(...resultadosDaImages);
        } catch (erro) {
            console.log('Erro na API Images:', erro);
        }

        if (resultadosFinais.length > 0) {
            res.statusCode = 200;
            res.end(JSON.stringify(resultadosFinais));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Nenhum resultado encontrado em nenhuma das APIs.' }));
        }
    }

    //se começar com /search vai chamar a função. . .
    if (req.url.startsWith('/search')) {
        await receberDados(); // Adicionei await aqui
    } else { //senão vai dar status 404 (servidor não conseguiu achar a página ou url inserida)
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Rota não encontrada.' }));
    }
});
*/
/* PQ EPIC NÃO FUNCIONA? PQ ELA FOI ARQUIVADA, OU SEJA, DESCONTINUADA
   1. API MARS: NÃO FUNCIONOU. . .
   2. API EPIC: TMB NÃO. . .
   3. AGORA TENTAREI A API EARTHDATA GIBS. . .(desisti pq seria complexa demais)
   4. API APOD (mais simples de implementar) */





// USANDO EXPRESS
const express = require('express'); //framework web para node.js
const path = require('path'); //módulo nativo do node.js
const app = express(); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./middleware'); //importando. . .

const cors = require('cors'); //para aceitar todas as origens/domínios/portas
//cors é uma biblioteca para o expŕess

app.use(express.json()); //para o express ler requisições json
app.use(express.urlencoded({extended : true})); //para o express ler dados de formulários
app.use(cors());

// É necessário instalar uma biblioteca dotenv para usar o .env (arquivo deve conter sua chave api, caso precise de uma), abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar

require('dotenv').config({path: path.join(__dirname, '../.env')}); //configurando o dontev para ler o arquivo .env 
 
//importar pool (lá do DB. . .)
const pool = require('./db_config');

//acessando a pasta public, pra iniciar a conexão do front com o back local
app.use(express.static(path.join(__dirname, '../public')));
 



//ROTA DE REGISTRAR DADOS DO USUÁRIO
app.post('/register', async (req, res) => {
    console.log('1. Requisição de registro recebida')
   const username = req.body.username;
   const email= req.body.email;
   const password = req.body.password;

    console.log('2. Dados do corpo', {username, email, password});
   
   //verificar se existem ou se estão vazios. . .
   if (!username || username.trim() === '' 
     || !email || email.trim() === '' 
     || !password || password.trim() === '') {

    res.status(400).json({ message: 'Todos os campos (username, email, password) são obrigatórios!'})
    return;
   }

   //verificar duplicidade de dados no banco de dados
   try {
    console.log('3. Verificando duplicidade de usuário/email...')
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
    res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.'})
    return;
}

//criptografando a senha
console.log('6. Criptografando a senha. . .')
 const senhaCriptografada = await bcrypt.hash(password, 10); //o "10" é o número de voltas que o bcriptjs dará para fechar o 'cadeado' (é como uma camada extra de proteção de senha para dificultar ataques. . .)
 console.log('7. Senha criptografada')

 try {
    console.log('8. Inserindo novo usuário no banco de dados. . .')
    const querySenha = `INSERT INTO users (username, email, password) 
                        VALUES ($1, $2, $3) RETURNING id`;
const verificarSenha = await pool.query(querySenha,[username, email, senhaCriptografada]);

console.log('9. resultado da inserção:', verificarSenha.rows);

//se pelo menos 1 linha tiver sido inserida no banco. . .
    if (verificarSenha.rows.length === 1) {
        console.log('10. Usuário cadastrado com sucesso!');
        res.status(201).json({message : 'Usuário cadastrado com sucesso!'})
        return;   
    } else {
        console.error('11. Inserção no banco de dados não retornou uma linha.'); 
        res.status(500).json({ message: 'Erro ao cadastrar usuário: Inserção falhou.' });
        return;
    }
 } catch (error) {
    console.log('12. Erro ao inserir dados no banco:', error)
    res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.'})
    return;
 }
})



//ROTA DE LOGIN DO USUÁRIO
app.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

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
        if (verificarUsers.rows.length) { //se usuário for encontrado. . .
            const user = verificarUsers.rows[0];
            const compararSenha = await bcrypt.compare(password, user.password); //"compare" é para verificar se a senha digitada pelo usuário corresponde ao hash armazenado no banco

            //se a senha estiver certa. . .
            if (compararSenha === true) { //se senha estiver correta
            const chaveJwt = process.env.JWT_SECRET;

            const payload = {
                id: user.id,
                email: user.email
            } 
 
            const options = { 
                expiresIn: '1h'
            }

            const token = jwt.sign(payload, chaveJwt, options) //gera token

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