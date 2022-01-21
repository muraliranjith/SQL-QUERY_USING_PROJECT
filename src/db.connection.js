const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LocalHost@123",
    database: "school",
    multipleStatement: true
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports =  db ;