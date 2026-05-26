//importando o pacote pg (PostGres)
//o pool gerencia múltiplas conexões com o banco de dados
const {Pool} = require('pg');

//configurar o dotenv(biblioteca) para acessar a chave em .env
require('dotenv').config()

let pool;

//se existir a string completa 
if (process.env.DATABASE_URL) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });
} else {
    //se não, usa as variáveis separadas do ambiente local (.env interno)
    //configurando o pool (são as msm informações do meu universe_db)
    pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT) || 5432,
      max: 10, //reduzido para compatibilidade com planos gratuitos (Render/Neon)
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
      ssl: false
    });
}
//para que outros arquivos possam usar o pool (minha conexão configurada)
module.exports = pool;