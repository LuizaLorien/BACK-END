const http = require ('node:http');
const fs = require ('node:fs');

const PORT = 3000;

const server = http.createServer((request, response)=>{
    //PROTOCOLO
    //Codigos, metodos, RECEBE as infos 
    const urlInfo = require('node:url').parse(request.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (err, data)=>{  
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(data)
        return response.end()
    })
    }else{
        const namenewline = nome + ',\n\r'
        fs.appendFile('arquivo.txt', namenewline, (err)=>{
            response.writeHead(302, {
                Location: '/'
            })
            return response.end()
        })
    }
    console.log(name)
})

server.listen(PORT, ()=>{


})