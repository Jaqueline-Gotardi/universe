//importando o pacote pg (PostGres)
const {Pool} = require('pg');

//configurar o dotenv(biblioteca) para acessar a chave em .env
require('dotenv').config()

const requiredEnvVars = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_NAME', 'DB_PORT'];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
if (missingEnvVars.length > 0) {
  console.error(`❌ Variáveis de ambiente ausentes: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

//configurando o pool (são as msm informações do meu universe_db)
const pool = new Pool({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : Number(process.env.DB_PORT),
    max: 10, //reduzido para compatibilidade com planos gratuitos (Render/Neon)
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
}) 

//para que outros arquivos possam usar o pool (minha conexão configurada)
module.exports = pool;  