//atividade 1
// const os = require('os')

// console.log(os.type())
// console.log(os.arch())

// //atividade 2
// const os = require('os')

// console.log(os.cpus())

// //atividade 3
// const os = require('os')
// let conversao 
// conversao = os.totalmem() / 1073741824


// console.log(`A memória total é:`, os.totalmem())
// console.log(`A mémoria total desse dispositivo em GigaBytes é: ${conversao.toFixed(2)}`)

// //atividade 4
// const os = require('os')

// console.log('O nome do usuário atual é:', os.userInfo().username)
// console.log('O diretório atual é:', os.homedir())

// //atividade 5
// const os =  require('os')

// console.log(os.type())
// console.log(os.version())
// console.log(os.platform())


//atividade 6
// const os =  require('os')

// const ipv6 = Object.values(os.networkInterfaces()).flat()[0].address
// const ipv4 = Object.values(os.networkInterfaces()).flat()[1].address

// const tempo = os.uptime() 

// converteSegundosHora = (x) => {
//     let segundos = parseInt(x % 60)
//     let minutos = parseInt((x / 60) % 60)
//     let horas = parseInt(x / 60 / 60 % 60)

//     return `${horas}hr:${minutos}min:${segundos}seg`
// }
// console.log('ipv6:',ipv6)
// console.log('ipv4:',ipv4)
// console.log(os.tmpdir())
