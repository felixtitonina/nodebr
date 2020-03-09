
// function fazRequisicao(resolver = true) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!resolver){
//                 reject("Deu erro");
//                 // ou 
//                 // throw new Error("Deu erro");
//             }
//                 resolve('Promise resolvida')
//         }, 5000)
//     })
// }

// fazRequisicao(false)
//     .then(console.log)
//     .catch(console.error);
let valor = 4;
let obj = {
    "msg": `texto complementar`
}
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (valor % 2 == 0) {
            resolve(`o valor divisivel por 2`)
        }
        resolve(`Valor não divisivel por 2, valor igual a ${valor}, ${JSON.stringify(obj.msg)}`)
    }, 500)
})

promise1
    .then(console.log)
    .catch(console.error)