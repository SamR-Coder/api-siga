const mysql = require("mysql")
const config = require("../DBConfig");


const con = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db
    
})

module.exports = con