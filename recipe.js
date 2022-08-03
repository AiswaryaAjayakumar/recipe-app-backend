const bodyParser = require('body-parser')
var express= require('express')
var mongoose=require('mongoose')
const { recipeModel } = require('./models/recipemodel')

var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME TO RECIPE APP")
})
 

app.post('/recipe',(req,res)=>{

    var recipeObject= new recipeModel(req.body)

    res.json(recipeObject)
})


app.listen(process.env.POST||3002,()=>{
    console.log("Server started at http://localhost:3002/")
})