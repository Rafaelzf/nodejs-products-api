//declara uma variável com valor da classe express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// executa a variável express e inicia o App
const app = express();
//Configura o express para enviar dados em formato JSON
app.use(express.json());
//Permite acesso à api por servidores externos
app.use(cors());

//Indicia a conexão com o banco
mongoose.connect('mongodb+srv://rafaelzf:liz123@cluster0-qgkk6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Chama o model de registro
require('./src/models/Product');

//Rotas
app.use('/api', require('./src/routes'));


// abre o servidor para uso
app.listen(3001);