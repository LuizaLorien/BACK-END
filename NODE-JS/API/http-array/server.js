
//métodos: GET, POST, PUT, PATH, DELETE

/**
 * 
 * REQUISIÇÃO
 * 1. corpo da requisição(request.body)
 * 2. (Search PARAMS, QUERY PARAMS http://localhost:3000/users/2)
 * 3. Parametros de ROTA(ROUTE PARAMS) - https://localhost:3000/users/1 (PUT, PATH, DELETE)
 *  
 * 
  */
import http from 'node:http'
server = request ('node:http')
PORT = 3000
const users = []
const server = http.createServer((request, response)=>{
    const{method, url} = request
    console.log('Olá')
    if(url === '/users' && method === " GET"){//buscar todos os usuários
        response.setHeader('Content-Type', 'application/json')
    }else if(true){//buscar um usuário
    }else if(true){//cadastrar usuário
    }else if(true){//atualizar usuário
    }else if(true){//deletar usuário
    }else{// reccurso nao encontrado

    }
    // response.writeHead(200, {'Content-Type' : 'test/plan'})
    // response.end()
})


server.listen(PORT,()=>{
    console.log(`servidor on PORT${PORT}`)
})