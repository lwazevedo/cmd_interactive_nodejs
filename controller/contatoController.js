const {mongoose, contato} = require('./../model/contato')
const assert = require('assert')

mongoose.Promise = global.Promise

const db  = mongoose.connect('mongodb://localhost:27017/contato')

const addContato = (newContato) => {
    contato.create(newContato,(err) => {
        assert.equal(null,err)
        console.info('Novo contato adicionado.')
        db.disconnect()
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
        db.disconnect()
    })
}

module.exports = {addContato, getContato}