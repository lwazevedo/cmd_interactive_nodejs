# cmd_interactive_nodejs
App de linha de comando interativa. 

# CRUD de Usuários
 - Usuário poderá realizar operações básicas do crud através do shell.
 
# Tecnologias aplicadas

- NodeJS
- CommanderJS
- InquirerJS
- MongoDB
- Yarn


**Instale as dependências**
```
cd pasta_do_projeto
yarn install
```

**Crie um link simbólico com yarn**
```
cd pasta_do_projeto
yarn link
```
**Exemplo de execução com link**
```
nome_link_criado --help
```

**Exemplo de execução sem link**
```
npm start 
ou 
node app.js --help
```

**Saída no console.**
```
 Usage: nome_do_projeto [options] [command]

  CRUD de contatos


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    addContato|add           Adiciona contato
    getContato|get <name>    Busca contato
    getListContato|list      Lista todos os contatos.
    updateContato|upd <_id>  Atualizar contato.
    deleteContato|del <_id>  Deletar contato.

```