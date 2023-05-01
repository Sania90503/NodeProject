var express = require("express");
var app = express();

app.get('/home' , (request, response)=>{
    response.write("Welcome Home");
    response.end();
}).listen(5050,()=>{
    console.log("Server running");
})