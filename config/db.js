require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool( {
    host :process.env.DB_HOST ,
    user:  process.env.DB_USER,
    database: process.env.DB_NAME,
    password:process.env.DB_PASSWORD ,
})

// TEST 
// const sql = 'SELECT * FROM post;';

// pool.execute(sql , function (err, results , fields) {
//     if(err){
//         throw err;
//     }
//     console.log("results" , results)
// })

module.exports = pool.promise();