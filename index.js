const http = require('node:http')

function task(x){
    this.x = x;
    return x * Math.pow(this.x, 2);
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' , 'Access-Control-Allow-Origin': '*'});
    if (req.url === '/login/') {
        res.end('itmo371919');
    } else if (req.url === '/sample/') { 
        res.end(task.toString())
    } else {
        res.end();
    }
   
    
}).listen(3000)