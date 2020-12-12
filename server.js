const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// const test = nonExistingVariable;


app.get('/', function(req,res){
    res.send("Hello World")
})
app.get('/test', function(req,res){
    res.send("Hello Test World")
})
app.listen(3001)