
function toLower(v) {
    return v.toLowerCase();
  }

const schema = global.mongoose.Schema({
    nome: {type: String, set: toLower},
    telefone:{type: String, set: toLower},
    email:{type: String, set: toLower}
})

const contato = global.mongoose.model('Contato', schema)

module.exports = {contato}