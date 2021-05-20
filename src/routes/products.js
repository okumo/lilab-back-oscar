const express = require('express')
const router = express.Router()

const mysqlConnection = require('../database')

router.get('/', function(req, res){
    res.send("hello")
})

module.exports = router;