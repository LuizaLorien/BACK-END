// //bloco de código para tratar funções async
// try{

//     //instrução de demora para acontecer
//     // await prisma.event.create({
//     //     data:{

//     //     }
//     // })
// } catch (error){
//     console.log(error)
// }

const b = 10

if(!Number.isInteger(b)){
    console.log('o valor de b não é um valor inteiro')
    throw new Error
}
console.log('a')