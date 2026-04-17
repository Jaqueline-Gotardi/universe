//importando o pacote pg (PostGres)
const {Pool} = require('pg');

//configurar o dotenv(biblioteca) para acessar a chave em .env
require('dotenv').config()

//configurando o pool (são as msm informações do meu universe_db)
const pool = new Pool({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
}) 

//para que outros arquivos possam usar o pool (minha conexão configurada)
module.exports = pool;  