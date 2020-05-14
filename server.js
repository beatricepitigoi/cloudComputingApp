'use strict'
const express=require('express') //gives access to the library 

let app=express()

app.use(express.static('public')) //folder , iar fct transmite ce se afla in el 
app.get('/ping',(req,res)=>{
    res.status(200).send('pong')
    
})

app.listen(process.env.PORT || 8080)

