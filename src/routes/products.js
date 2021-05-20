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

router.put('/updateProducts', (req, res)=>{
    let productsArray = req.body
    mysqlConnection.query('SELECT * FROM products', (err, rows, fields)=>{
       if(!err){
           let arrayData = (Object.values(JSON.parse(JSON.stringify(rows))))
           let rowsUpdated=[]
           arrayData.forEach(element=>{
               let filteredValues = productsArray.filter(product=>product.id==element.id)
               if(filteredValues.length){
                   let countBought = filteredValues.length
                   element.stock = element.stock-countBought
                   rowsUpdated.push(element)
               }
           })
           let queryString=""
           rowsUpdated.forEach(row=>{
               queryString= queryString.concat(` UPDATE products SET stock=${row.stock} WHERE id=${row.id};`)
           })
           if(queryString!==""){
               mysqlConnection.query(queryString, (err, rows, fields)=>{
                   if(!err){
                       res.json({
                           status: 200
                       })
                   }else{
                       console.log(err)
                   }
               })
           }
        }
    })
} )


module.exports = router;