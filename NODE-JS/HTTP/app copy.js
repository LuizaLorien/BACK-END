const http = require ('node:http');
const PORT = 3333 

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type' : 'test/plan'})
    response.end()
})


server.listen(PORT,()=>{
    console.log(`servidor on PORT${PORT}`)
})