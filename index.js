const http = require('node:http')


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' , 'Access-Control-Allow-Origin': '*', 'X-Author':'itmo371919'});
    res.end('itmo371919');
}).listen(3000)