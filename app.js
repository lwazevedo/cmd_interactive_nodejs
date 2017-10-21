require('./config/db')

const contato = require('./controller/contatoController')

const nContato = {
    nome: 'Luiz',
    telefone: 'xxxxxxx',
    email: 'xxxxxxxx@gmail.com'
}

//contato.addContato(nContato)
contato.getContato('luiz')
