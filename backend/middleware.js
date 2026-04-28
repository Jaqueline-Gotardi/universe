const jwt = require('jsonwebtoken'); //importando
require('dotenv').config()
const chaveDoJwt = process.env.JWT_SECRET; 

  
function authMiddleware(req, res, next) {

    const token = req.cookies.token; //pega o token

    //se o token não for extraído
       if (!token) {
        //se a extração falhar
        return res.status(401).json({message: 'Acesso negado, sessão expirada ou não encontrada.'})
        }

        //verificação real do jwt
        jwt.verify(token, chaveDoJwt, (err, decoded) => {
            if (err) {
                return res.status(401).json({message: 'Token inválido ou expirado'})
            } else {
                req.user = decoded;

                next() //--> para enviar o acesso pra rota search (onde a função authMiddleware é importada)
            }
        })
}

module.exports = authMiddleware; //para exportar 