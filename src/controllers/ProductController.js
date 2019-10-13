const mongoose = require('mongoose');

//instância o model de produtos 
const Product = mongoose.model('Product');

module.exports = {
    //método de listagem
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    //método de exibição de um registro
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    //método de criação de registro
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    //método de update
    async update(req, res) {
        //O parâmetro new true retorna o objeto atualizado - Obrigatório
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    //método de criação de destroy
    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

/*  Product.create({
      title: 'NodeJs',
      description: 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores.',
      url: 'https://nodejs.org/en/'
  })*/