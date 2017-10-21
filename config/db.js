
global.mongoose = require('mongoose')
mongoose.Promise = global.Promise

global.db  = mongoose.connect('mongodb://localhost:27017/contato', {
    useMongoClient: true
})
 