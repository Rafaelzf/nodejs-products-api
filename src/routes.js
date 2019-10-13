const express = require('express');
const routes = express.Router();


const productController = require('./controllers/ProductController')


//Função que responde a tratativa do usuário ao acessar um rota "x"
// o primeiro paramento é o caminho da rota. o segundo  são parametros de requisição e resposta
routes.get('/products', productController.index);

//rota de inserção de dados
routes.post('/products', productController.store)

//rota de exibição de um produto
routes.get('/products/:id', productController.show)

//rota de update de dados
routes.put('/products/:id', productController.update)

//rota de DELETE de dados
routes.delete('/products/:id', productController.destroy)

module.exports = routes;