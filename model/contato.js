const mongoose = require('mongoose')

function toLower(v) {
    return v.toLowerCase();
  }

const schema = mongoose.Schema({
    nome: {type: String, set: toLower},
    telefone:{type: String, set: toLower},
    email:{type: String, set: toLower}
})

const contato = mongoose.model('Contato', schema)

module.exports = {mongoose, contato}