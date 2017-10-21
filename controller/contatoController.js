const assert  = require('assert')
const {contato} = require('./../model/contato')

const addContato = (newContato) => {
    contato.create(newContato,(err) => {
        assert.equal(null,err)
        console.info('Novo contato adicionado.')
        global.db.close()
    })
}

const getContato = (nome) => {
    contato.find({nome:nome})
    .exec((err, contato) => {
        assert.equal(null, err)
        if(contato.length > 0){
            console.info(contato)
            console.info(`${contato.length} contato(s) encontrado(s)`)
        } else {
            console.log('Nenhum contato encontrado.')
        }
        global.db.close()
    })
}

module.exports = {addContato, getContato}