
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

const PORT = 3333
const users = []
const server = http.createServer((request, response)=>{
    const {method, url} = request

    if(url === '/users' && method === "GET"){//Buscar todos os usuários
        response.setHeader('content-Type', 'application/json')
        response.end(JSON.stringify(users))
    
    }else if(false){//Buscar único usuários
    }else if(url === '/users' && method === "POST"){
    //cadastrar um usuário
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString() //'id:User, email:email'
        })
        request.on('end', ()=>{
            const newuser = JSON.parse(body)
            newuser.id = '1'
            users.push(newuser)
            response.writeHead(201, {'Content-Type': 'applications/json'})
            responde.end(JSON.stringify(newuser))
        })
    }else if(true){//Atualizar um usuário
    }else if(true){//Deletar um usuário
    }else{//Recurso não encontrado
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})
