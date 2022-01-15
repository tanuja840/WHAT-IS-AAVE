



const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');


const port = 3339;
const index = fs.readFileSync('index.html')
const api = fs.readFileSync('./api.json')


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/api'){
        res.end(api);
    }
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${port}/`);
  });










