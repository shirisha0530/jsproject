const http = require ('http');
const fs=require('fs');

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type': 'text/html'})
if(req.url === '/index' || req.url === '/'){
    let data =fs.readFileSync('static/index.html');
    res.write(data);
}
else if(req.url === '/about'){
    let data = fs.readFileSync('static/about.html');
    res.write(data);
}else if (req.url === '/login') {
let data =fs.readFileSync('static/login.html');
res.write(data);
}else if (req.url === '/login') {
    let data =fs.readFileSync('static/login.html');
    res.write(data);
}else  {
    let data =fs.readFileSync('static/product.html');
    res.write(data);
}

res.end();
}).listen(8080, () => {console.log('server started at port 8080')});
