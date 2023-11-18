
const pool = require('../db/db');

async function librosAutors(req,res){
    try{
        const autorId = req.params.id;
       const [libros] =  await new Promise((resolve,reject)=>{
         pool.query('CALL Libros_autor(?)',[autorId],(error,result)=>{
            if(error){
                console.log('Error at execute the stored procedure:',error);
                reject(error);
            }else{
                resolve(result);
            }
        });
        });
        res.json({libros})
    }catch(error){
        res.status().json({
            message:'Something happened',
            obj:null
        })
    }
}

async function autorsBooks(req, res) {
    try {
        const [autores] = await pool.query('CALL autores_libros()');
        
        if (autores && autores.length > 0) {
            res.json(autores);
        } else {
            res.status(404).json({ error: 'No data found' });
        }
    } catch (error) {
        console.error('Function error', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
async function altaUsers(req, res) {
    try {
        const { nameUser, age, job } = req.body;
        await pool.query('CALL AltaUsuario(?, ?, ?, @insertId)', [nameUser, age, job]);
        const insertIdResult = await pool.query('SELECT @insertId as insertId');
        const insertId = insertIdResult[0][0].insertId;
        res.send({
            id:insertId,
            nameUser,
            age,
            job
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear usuario');
    }
}


async function bajaUsers(req,res){
    try {
        const id = req.params.id
        const users = pool.query('CALL bajaUsuario(?)',[id]);
        if (users && users.length <= 0) {
            return res.status(404).json({
                message: 'Failed to baja users -User not found',
                obj: null
            });
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something happened',
            obj: null
        });
    
    }
}
async function altaAutors(req,res){
    try {
        const { autor, age, city } = req.body;
        await pool.query('CALL altaAutor(?, ?, ?, @insertId)', [autor, age, city]);
        const insertIdResult = await pool.query('SELECT @insertId as insertId');
        const insertId = insertIdResult[0][0].insertId;
        res.send({
            id:insertId,
            autor,
            age,
            city
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear autor');
    }
}
async function bajaAutors(req,res){
    try {
        const id = req.params.id
        const autors = pool.query('CALL bajaAutor(?)',[id]);
        if (autors && autors.length <= 0) {
            return res.status(404).json({
                message: 'Failed to baja autors -Autor not found',
                obj: null
            });
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something happened',
            obj: null
        });
    
    }
}
async function altaLibros(req,res){
    try {
        const { book, fecha_publicacion,ventas,id_autor } = req.body;
        await pool.query('CALL Altalibro(?, ?, ?,?, @insertId)', [book, fecha_publicacion, ventas,id_autor]);
        const insertIdResult = await pool.query('SELECT @insertId as insertId');
        const insertId = insertIdResult[0][0].insertId;
        res.send({
            id:insertId,
            book,
            fecha_publicacion,
            ventas,
            id_autor
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear usuario');
    }
}
async function bajaUsersLibros(req,res){
    try {
        const id = req.params.id
        const books = pool.query('CALL Bajalibro(?)',[id]);
        if (books && books.length <= 0) {
            return res.status(404).json({
                message: 'Failed to baja book -BOOK not found',
                obj: null
            });
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Something happened',
            obj: null
        });
    
    }
    
}
module.exports = {
    librosAutors,
    autorsBooks,
    altaUsers,
    bajaUsers,
    altaAutors,
    bajaAutors,
    altaLibros,
    bajaUsersLibros
    
}