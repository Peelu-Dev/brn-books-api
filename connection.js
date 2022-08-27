const mysql = require('mysql');

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:'root',
    password:process.env.PASSWORD,
    database:'brnbooks'
})

connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log(err);
    }
})

module.exports = connection;