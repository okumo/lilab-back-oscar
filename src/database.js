const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: "0.0.0.0",
    user: 'user',
    password: 'password',
    database: 'products'
})

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err)
    }else{
        console.log('Database is connected')
    }
})

module.exports= mysqlConnection