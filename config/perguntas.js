let perguntas = {}

const addContato = [
    {
        type: 'input',
        name: 'nome',
        message: 'Favor informar o nome do contato'
    },
    {
        type: 'input',
        name: 'telefone',
        message: 'Favor informar o numero de telefone'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Favor informar o email'
    }
]

perguntas.addContato = addContato

module.exports = perguntas


