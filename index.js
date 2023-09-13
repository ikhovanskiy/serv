const http = require('node:http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' , 'Access-Control-Allow-Origin': '*'});
    if (req.url === '/login/') {
        res.end('itmo371919');
    } else if (req.url === '/sample/') { 
        res.end(`function task(x){
            this.x = x;
            return x * Math.pow(this.x, 2);
        }`)
    } else if (req.url === '/promise/'){
        res.end(`function task(x){
            const promise = new Promise((res,rej)=>{
                x<18 ? res('yes'): rej('no')
            })
            return promise}`)
    } else  if(req.url === '/fetch/'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
        res.write(
            `
            <input id='inp'>
            <button id='bt' onclick='handlerClick()'>Кнопка</button>
            <script>
            function handlerClick (){
                let inp = document.querySelector('#inp')
                fetch(inp.value)
                .then(response=>response.text())
                .then(result => inp.value = result)
            }
            </script>
            `
        )
        res.end()
    } else if(req.url === '/result4/') {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' ,
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
         'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'});
     
        let body = ''
        req.on("data", data => {
            body += data;
        });

        req.on("end", () => {
            const x_result = req.headers['x-test']
            const x_body = body
            res.write(JSON.stringify({
                        'message': 'itmo371919',
                        'x-result': x_result,
                        "x-body": x_body,
                    }))
            res.end()
            });
    }
    else
    {
        res.end();
    } 
    
}).listen(3000)