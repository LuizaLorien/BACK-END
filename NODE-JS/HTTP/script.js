
const http = require('node:http');

// const server = http.createServer((request, response)=>{
//     response.write('ablubluble, primero server HTTP.');
//     response.end();
// });

// server.listen(3333, ()=>{
//     console.log('Sevidor on PORT: 3333.');
// });

const url = require('node:url');
const PORT = 3333;

// request -> url
const server = http.createServer((request, response)=>{
    if(request.rul === '/'){
        response.writeHead(200, {'Content:Type' : 'text/plan'})
        response.end('Páina Inicial')
    }else if(response.url === '/sobre'){
        response.writeHead(200, {'Content:Type' : 'text/plan'})
        response.end('Página Sobre')
    }else{
        response.writeHead(404, {'Content:Type' : 'text/plan'})
        response.end('Página Não Encontrada')
    }
});

server.listen(PORT, ()=>{
    console.log('Sevidor on PORT:'+PORT);
});
