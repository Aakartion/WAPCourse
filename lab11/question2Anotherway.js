const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response)=>{
    fs.readFile(path.join(__dirname, 'image/lion.jpg'),'utf8',(error, data)=>{
        response.end(data);
    })
}).listen(4000);