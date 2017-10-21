const cmd = require('commander')
const {
    prompt
} = require('inquirer')
const perguntas = require('./../config/perguntas')

const {
    addContato,
    getContato
} = require('./contatoController')

cmd
    .version('1.0.0')
    .description('CRUD de contatos')


cmd
    .command('addContato')
    .alias('add')
    .description('Adiciona contato')
    .action(() => {
        prompt(perguntas.addContato)
            .then(asw =>
                addContato(asw))
    })

cmd
    .command('getContato <name>')
    .alias('get')
    .description('Busca contato')
    .action(nome => getContato(nome))

cmd.parse(process.argv)