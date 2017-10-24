const assert = require('assert')
const {
    contato
} = require('./../model/contato')

const addContato = (newContato) => {
    contato.create(newContato, (err) => {
        assert.equal(null, err)
        console.info('Novo contato adicionado.')
        global.db.close()
    })
}

const getContato = (nome) => {
    contato.find({
            nome: nome
        })
        .exec((err, contato) => {
            assert.equal(null, err)
            if (contato.length > 0) {
                console.info(contato)
                console.info(`${contato.length} contato(s) encontrado(s)`)
            } else {
                console.log('Nenhum contato encontrado.')
            }
            global.db.close()
        })
}

const getListContato = () => {
    contato.find()
        .exec((err, contatos) => {
            assert.equal(null, err)
            if (contatos.length > 0) {
                console.info(contatos)
                console.info(`${contatos.length} contato(s) encontrado(s).`)
            } else {
                console.log('Nenhum contato encontrado.')
            }
            global.db.close()

        })
}

const updateContato = (_id, novoContato) => {
    contato.update({
            _id
        }, novoContato)
        .exec((err, status) => {
            assert.equal(null, err)
            console.info('Contato atualizado com sucesso.')
            global.db.close()
        })
}

const deleteContato = (_id) => {
    contato.remove({
            _id
        })
        .exec((err, status) => {
            assert.equal(null, err)
            console.info('Contato deletado com sucesso.')
            global.db.close()
        })
}

module.exports = {
    addContato,
    getContato,
    getListContato,
    updateContato,
    deleteContato
}