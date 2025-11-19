const express = require('express');
const path = require('path');
const app = express()
// É necessário instalar uma biblioteca dotenv para usar o .env (arquivo deve conter sua chave api, caso precise de uma), abra seu terminal no vscode msm e digite ('npm i dotenv') para instalar
require('dotenv').config()
//const apiKey = process.env.API_KEY  
//console.log(process.env)  

//acessando a pasta public, pra iniciar a conexão do front com o back local
app.use(express.static(path.join(__dirname, '../public')));
 
const http = require('http'); //cria o servidor
const { URLSearchParams } = require('url'); //lida com parâmetros 
/* const { stringify } = require('querystring');
const { error } = require('console'); */

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json'); //indica o formato da resposta

    //para autorizar o navegador a acessar as requisições vindas do Front
    //res.setHeader("Access-Control-Allow-Origin", "http://localhost:5501"); //acessar a origem
    res.setHeader("Access-Control-Allow-Origin", "*"); //o "*" permite rodar o servidor de qualquer origem
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); //acessar os métodos
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Accept, X-Requested-With"); //acessar o cabeçalho
    //res.status(200).end()

    //para permitir a navegação no servidor
    if (req.method === "OPTIONS") {
        res.statusCode = 200;
        res.end()
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
                console.log('Tentando API APOD. . .')
            const respostaComChave = await fetch(`https://api.nasa.gov/planetary/apod?&api_key=${process.env.API_KEY}`);

            if (!respostaComChave.ok) {
                throw new Error(`Resposta da API APOD falhou com status: ${respostaComChave.status}`)
            }
            
            const dadosComChave = await respostaComChave.json();
            //console.log(JSON.stringify(dadosComChave, null, 2));
            //"null, 2" é apenas para deixar as informações mais visíveis

            if (dadosComChave.url) { 
                console.log('Dados encontrados na APOD. Formatando e adicionando. . .')

                const resultadosDaApod = [{
                    source: 'APOD',
                    title:dadosComChave.title || 'Sem título (APOD)',
                    date_created: dadosComChave.date || 'Sem data',
                    location: 'Espaço',
                    description: dadosComChave.explanation || 'Sem descrição',
                    href: dadosComChave.media_type === 'image' ? dadosComChave.hdurl || dadosComChave.url : dadosComChave.url
                }];

                resultadosFinais.push(...resultadosDaApod);
            } else {
                console.log('APOD não retornou dados concretos. Seguindo para a gratuita. . .')
            }
        } catch (erro) {
            console.log('Erro ao acessar API APOD (mas seguindo para a API gratuita):', erro)
        }
    }


    //BUSCAR DADOS NA API GRATUITA. . .
    try {
        console.log('Chamando API NASA Images (Gratuita)...')
        //receber o valor do input
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
    } catch (erro){
        console.log('Erro na API Images:', erro);
    }

    if(resultadosFinais.length > 0) {
        res.statusCode = 200;
        res.end(JSON.stringify(resultadosFinais));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: 'Nenhum resultado encontrado em nenhuma das APIs.'}));
    }
}

//se começar com /search vai chamar a função. . .
if (req.url.startsWith('/search')) {
    receberDados();
} else { //senão vai dar status 404 (servidor não conseguiu achar a página ou url inserida)
    res.statusCode = 404;
    res.end(JSON.stringify({error: 'Rota não encontrada.'}))
}
});


//inicia o servidor na porta 3000
server.listen(3000, () => { 
    console.log('Servidor em execução em http://localhost:3000/');
});



/* PQ EPIC NÃO FUNCIONA? PQ ELA FOI ARQUIVADA, OU SEJA, DESCONTINUADA
   1. API MARS: NÃO FUNCIONOU. . .
   2. API EPIC: TMB NÃO. . .
   3. AGORA TENTAREI A API EARTHDATA GIBS. . .(desisti pq seria complexa demais)
   4. API APOD (mais simples de implementar) */