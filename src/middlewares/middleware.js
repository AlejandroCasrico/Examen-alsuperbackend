const jwt = require('jsonwebtoken')

 async function checkToken(req, res, next){
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({
            message:'no token',
            token:null
        });
    }
    try {
        const decoded = await jwt.verify(token,'your access');
         req.user = decoded;

          res.status(200).json({
            message:'token valid',
            token
        })
                next();
    } catch (error) {
        return res.status(403).json({
            message: 'Invalid token',
            token: null
        });
    }
 }

 module.exports = {
    checkToken
 }