/**
 * - Obter usuario
 * - Obter o numero de telefone de um usuario a partir de seu Id 
 * - Obter o endereco do usuario pelo ID
 */
//===================
// importamos um modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der algum prblema -> reject(ERRO)
    // qunado sucesso -> RESOLVE
    // retornara um obj do tipo promise
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
            // retornar o resultado do callback 
            // return reject(new Error('Deu ruim de verdade'))
            return resolve({
                id: 1,
                nome: 'Alandin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                telefone: '11985522347',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback_e) {
    setTimeout(() => {
        return callback_e(null, {
            rua: 'rua dos bobos',
            numero: 22
        })
    }, 3000)
}

// 1 passo adicionar a palavra async 
// feito isso automaticamente ela retornara uma promise
main() // precisa passar a assinatura da funcao
async function main() {
    try {
        // colocar o await só quando precisar 
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([ // quando as funcoes não dependem da resposta de outros uso o promiseAll
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
                Nome: ${usuario.name},
                Telefone: (${telefone.ddd}) ${telefone.telefone},
                Endereco: ${endereco.rua}, nº${endereco.numero}
            `)
        console.timeEnd('medida-promise')
    } catch (error) {
        console.error('deu ruim', error)
    }
}


