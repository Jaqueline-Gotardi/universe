//importando o pacote pg (PostGres)
const {Pool} = require('pg');

//configurar o dotenv(biblioteca) para acessar a chave em .env
require('dotenv').config()

//configurando o pool (são as msm informações do meu universe_db)
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'universe_db',
    password : process.env.DB_PASSWORD,
    port : 5432,
})

//para que outros arquivos possam usar o pool (minha conexão configurada)
module.exports = pool;