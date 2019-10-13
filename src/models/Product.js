const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//configurando o schema (padrão) de dados que será gravado no banco de dados
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

//Plugin de paginação
productSchema.plugin(mongoosePaginate);

//Registrando um model na aplicação - 1° parâmetro nomeira o model, 2º parâmetro passa suas características
mongoose.model('Product', productSchema);