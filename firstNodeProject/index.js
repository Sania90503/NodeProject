var express = require("express");
var app = express();
var  student = require('./student');
const { request } = require("http");

app.listen(5050,()=>{
    console.log("Server running");
})
// app.get('/' , (request, response)=>{
//     // response.write("<h1>Welcome World</h1> <br>");
//     // response.write(" Sb Bdl jaata h waqt k sath , Umar , Pasand , Na-Pasand , Goals , Aim , Soch , Sb Kuch <br>")
//     response.json(student);
//     response.end();
// });
app.get('/aboutus', (request,response)=>{
response.send("<b>About Us</b>");
})

app.get('/contact' , (request,response)=>{
    response.sendFile(__dirname + '/contact.html')
})

app.post('/contact', (request,response)=>{
    response.send("Form Information Submitted")
});

// const Sania = require('./second')
// console.log("Hello Sania" , Sania );