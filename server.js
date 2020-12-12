const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', function(requ,res){
    res.send("Hello World")
})
app.listen(3000)