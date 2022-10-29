require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function(req,res){
res.send('Hello World')
})

app.listen(3000, () => {
    console.log("El puerto esta corriendo el puerto TCP3000")
});