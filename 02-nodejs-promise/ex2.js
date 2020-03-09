let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('A promise 1 foi resolvida')
        reject('A promise 1 foi rejeitada')

    }, 9000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('A promise 2 foi rejeitada')
        resolve('A promise 2 foi resolvida')

    }, 2000)

})

Promise.all([promise1, promise2])
    .then(([resultado1, resultado2]) => {
        console.log('Todas promises formam resolvidas')
        console.log(resultado1)
        console.log(resultado2)
    })
    .catch((error) => {
        console.log('Uma das promises foi rejeitada: ')
        console.log(error)
    })