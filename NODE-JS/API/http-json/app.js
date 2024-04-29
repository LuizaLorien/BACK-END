import fs from 'node:fs';
import http from 'node:http';

const PORT = 3333;

const server = http.createServer((request, response)=>{
    const {method, url} = request;

    fs.readFile('funcionarios.json', 'utf8', (err, data)=>{
        if(err){
            response.write(500, { "Content-Type" : "applicatin.json"});
            response.end(JSON.stringify({message: "erro ao buscar os dados"}));
        };
    })
    let jsonData = [];
    try{
        jsonData = JSON.parse(data);
    } catch(error){
        console.error("erro ao ler o arquivo jsondata"+error);

    };
    if(method === "GET" && url ==="./empregados"){
        console.log("GET /empregados:");
        response.end;
    }else if (method === "GET" && url ==="/empregados/count/"){
    }else if (method === "GET" && url.startsWith ==="/empregados/porcargo/"){
    }else if (method === "GET" && url ==="/empregados/porhabilidade/"){
    }else if (method === "GET" && url ==="/empregados/porfaixasalarial/"){
    }else if (method === "GET" && url.startsWith ==="/empregados"){
    }else if (method === "POST" && url === "/empregados/"){
    }else if (method === "PUT" && url.startsWith ==="/empregados/"){
    }else if (method === "DELETE" && url.startsWith ==="/empregados/"){
    }else{};
});

server.listen(PORT, () => {
    console.log('Servidor on na porta' + PORT);
});