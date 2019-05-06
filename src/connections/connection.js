const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devuser',
    password: 'mysql1234',
    host: 'localhost',
    database:'ujianbackend',
    port: '3306'
})

module.exports = conn
