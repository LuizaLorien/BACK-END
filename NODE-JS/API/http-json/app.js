import fs from 'node:fs';
import http from 'node:http';

const PORT = 3333;

const server = http.createServer((request, response) => {
    const { method, url } = request;

    fs.readFile('funcionarios.json', 'utf8', (err, data) => {
        if (err) {
            response.write(500, { "Content-Type": "application.json" });
            response.end(JSON.stringify({ jsonData }
            ));
        };
        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.error("erro ao ler o arquivo jsondata" + error);

        };
        if (method === "GET" && url === "/empregados") {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(jsonData));
        } else if (method === "GET" && url === "/empregados/count/") {
        } else if (method === "GET" && url.startsWith === "/empregados/porcargo/") {
            const cargo = url.split('/')[3]
            const empregadoencontrado = jsonData.filter(dado => dado.cargo == cargo)
            
            if(!cargo){
                response.writeHead(404, 'content-type', "")

            }
        } else if (method === "GET" && url.startsWith === "/empregados/porhabilidade/") {
        } else if (method === "GET" && url.startsWith === "/empregados/porfaixasalarial/") {
        } else if (method === "GET" && url.startsWith === "/empregados/") {
        } else if (method === "POST" && url === "/empregados") {
            let body = ""

            request.on("data", (chunk) => {
                body += chunk.toString()
            });

            request.on('end', () => {
                const newItem = JSON.parse(body);
                newItem.id = jsonData.length + 1; // Gerar um novo ID
                jsonData.push(newItem);
                fs.writeFile("funcionarios.json", JSON.stringify(jsonData, null, 2),
                    (err) => {
                        if (err) {
                            response.writeHead(500, { "Content-Type": "application/json" });
                            response.end(
                                JSON.stringify({ message: "Erro interno do servidor" })
                            );
                            return;
                        }
                        response.writeHead(201, { "Content-Type": "application/json" });
                        response.end(JSON.stringify(newItem));
                    }
                )})







                
        } else if (method === "PUT" && url.startsWith === "/empregados/") {
        } else if (method === "DELETE" && url.startsWith === "/empregados/") {
        } else { };
    })

});

server.listen(PORT, () => {
    console.log('Servidor on na porta' + PORT);
});