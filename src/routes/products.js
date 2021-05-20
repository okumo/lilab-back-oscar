const express = require('express')
const router = express.Router()

const mysqlConnection = require('../database')

router.get('/products', function(req, res){
    mysqlConnection.query('SELECT * FROM products', (err, rows, fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
    })
})

module.exports = router;