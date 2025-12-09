const jwt = require('jsonwebtoken'); //importando
require('dotenv').config()
const chaveDoJwt = process.env.JWT_SECRET; 

 
function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']; 

    //se o cabeçalho existir. . .
    if (!authHeader) {
        return res.status(401).json({message: 'Acesso negado, token não fornecido. . .'})
    }

    const token = authHeader.split(' ')[1] 

    //verificar se o token foi extraído
       if (!token) {
        //se a extração falhar
        return res.status(401).json({message: 'O formato de token é inválido.'})
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