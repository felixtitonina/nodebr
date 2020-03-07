

/**
 * - Obter usuario
 * - Obter o numero de telefone de um usuario a partir de seu Id 
 * - Obter o endereco do usuario pelo ID
 */
//===================



/**
 * Quando esta funcao terminar apos os 1 min, chamar a funcao callback pra informar 
 * que terminou a execucao
 * @param {*} callback 
 */
function obterUsuario(callback_x) {
    setTimeout(function () {
        // retornar o resultado do callback 
        return callback_x(null, {
            id: 1,
            nome: 'Alandin',
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback_t) {
    // por padrao o callback é o ultimo
    setTimeout(function () {
        // por padra o primeiro erro e o segundo sucesso
        return callback_t(null, {
            telefone: '11985522347',
            ddd: 11
        })
    }, 2000)

}

function obterEndereco(idUsuario, callback_e) {
    setTimeout(()=>{
        return callback_e(null, {
            rua: 'rua dos bobos',
            numero: 22
        })
    }, 3000)
}

/**
 *  #2 
 * @param {*} error parametro quando retornar erro
 * @param {*} usuario paramentro qunado retornar exito
 * conhecido como o padrão callback
 */
function resolverUsuario(error, usuario) {
    console.log('Usuario ', usuario)
}

/** #1 
 * Quando o obterUsuario terminar de executar sua funcao 
 * ele ira chamar a funcao resolverUsuario
 */
obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if (error) {
        console.log('Deu ruim em usuario', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error) {
            console.error('Deu Ruim no telefone', error)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('Deu Ruim em telefone', error)
                return
            }
            console.log(`
                Nome:       ${usuario.nome}
                Endereco:   ${endereco.rua}, ${endereco.numero}
                Telefone:   (${telefone.ddd}) ${telefone.telefone} 
            `)
        })
    })

})
// const telefone = obterTelefone(usuario.id)


// console.log(`Telefone ${telefone}`)



//  Callbacks normalmente são utilizados quando você ainda não tem uma informação, ou só quer executar a função após algo acontecer. Ex: Você quer mostrar uma 
// listagem de produtos, mas você só vai ter a listagem após um request terminar. Ou você quer remover um item do seu carrinho, mas só depois de finalizar o 
// request de remoção. Outros exemplos fora de request: as funções que passamos para Array.filter Array.map e etc.. Segue um gist que criei agora com alguns exemplos:

