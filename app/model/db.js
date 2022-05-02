 const mysql = require("mysql")
const config = require("../DBConfig");


const con = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db,
    connectTimeout: config.connectTimeout
    
})



/* const con= require('serverless-mysql')({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    }
  })
 const dotenv= require('dotenv')
 dotenv.config({path:"../../node_modules\dotenv\lib\main.d.ts" + '/config.env'}) */

module.exports = con