const http = require('http');

http.createServer((req,res)=>{
    res.write("HTTP Server created");
    res.end();
}).listen(3000 , ()=>{
    console.log("Running on HTTP")
});