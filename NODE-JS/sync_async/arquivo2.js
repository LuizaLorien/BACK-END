//sincrona - statica

const fs = require('fs')

console.log('Start')

fs.writeFileSync('arquivo2.txt', 'oi', ()=>{
    setTimeout(() => {
        console.log('arquivo criado')
    }, 3000);
})

console.log('End')

