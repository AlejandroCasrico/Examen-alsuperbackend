const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'gokusayayin',
    port:3306,
    database:'TrabajoExamen',
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;