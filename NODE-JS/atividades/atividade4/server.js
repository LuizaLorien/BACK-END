import http from 'node:http'
import fs from 'node:fs'

const PORT = 3000

const server = http.createServer((request, response)=>{
})


server.listen(PORT,()=>{
    console.log(`servidor on PORT ${PORT}`)
})