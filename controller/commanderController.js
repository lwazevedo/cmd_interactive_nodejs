const cmd = require('commander')
const {
    prompt
} = require('inquirer')
const perguntas = require('./../config/perguntas')

const {
    addContato,
    getContato,
    getListContato,
    updateContato,
    deleteContato
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

cmd
    .command('getListContato')
    .alias('list')
    .description('Lista todos os contatos.')
    .action(() => getListContato())

cmd
    .command('updateContato <_id>')
    .alias('upd')
    .description('Atualizar contato.')
    .action(_id => {
        prompt(perguntas.updateContato)
            .then((asw) => updateContato(_id, asw))
    })

cmd
    .command('deleteContato <_id>')
    .alias('del')
    .description('Deletar contato.')
    .action(_id => deleteContato(_id))

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    cmd.outputHelp()
    process.exit()
}

cmd.parse(process.argv)