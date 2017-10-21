const cmd = require('commander')
const {
    addContato,
    getContato
} = require('./contatoController')

cmd
    .version('1.0.0')
    .description('CRUD de contatos')


cmd
    .command('addContato <Nome> <Telefone> <email>')
    .alias('add')
    .description('Adiciona contato')
    .action((nome, telefone, email) => {
        addContato({
            nome,
            telefone,
            email
        })
    })

cmd
    .command('getContato <name>')
    .alias('get')
    .description('Busca contato')
    .action(nome => getContato(nome))

cmd.parse(process.argv)