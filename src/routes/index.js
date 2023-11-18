const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController')
const authMiddleware = require('../middlewares/middleware')
router.get('/',function(req,res){
    res.send('¡Hola! Esta es la pagina de inicio')
})
router.get('/about',function(req,res){
    res.send('Bienvenido a la pagina "Acerca de nosotros".')
})
router.get('/contact',function(req,res){
    res.send('Ponte en contacto con nosotros en  contact@example.com')
})
//querys libros 
router.get('/libros-autores/:id',authMiddleware.checkToken,infoController.librosAutors);
router.get('/libros',authMiddleware.checkToken,infoController.autorsBooks);
//usuarios
router.post('/altaUser',authMiddleware.checkToken,infoController.altaUsers);
router.delete('/bajaUser/:id',authMiddleware.checkToken,infoController.bajaUsers);
//autores
router.post('/altaAutor',authMiddleware.checkToken,infoController.altaAutors);
router.delete('/bajaAutor/:id',authMiddleware.checkToken,infoController.bajaAutors);
//libros
router.post('/altaLibro',authMiddleware.checkToken,infoController.altaLibros);
router.delete('/bajaLibro/:id',authMiddleware.checkToken,infoController.bajaUsersLibros);


module.exports = router;