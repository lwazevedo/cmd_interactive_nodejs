const contato = require('./controller/contatoController')

const nContato = {
    nome: 'Luiz',
    telefone: '981777763',
    email: 'lwnazevedo@gmail.com'
}

//contato.addContato(nContato)
contato.getContato('luiz')