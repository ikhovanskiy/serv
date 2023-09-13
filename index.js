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
            async function handlerClick (){
                let inp = document.querySelector('#inp')
                response = await fetch(inp.value)
                inp.value = await response.text()
            }
            </script>
            `
        )
        res.end()
    } else
    {
        res.end();
    }  
}).listen(3000)