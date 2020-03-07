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

const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a funcao .then
// para manipular erros, usamos o .catch
// execucao do THEN usuario -> telefone -> telefone
usuarioPromise
    .then(function (usuario_t) {
        return obterTelefone(usuario_t.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario_t.nome,
                        id: usuario_t.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolveEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.name}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.error('Deu ruim ', error)
    })