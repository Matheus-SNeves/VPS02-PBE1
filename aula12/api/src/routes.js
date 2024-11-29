const express = require('express');

const routes = express.Router();
const Produto = require('./controllers/produtos');
const Pedido = require('./controllers/pedidos');
const Cliente = require('./controllers/clientes');
const Telefone = require('./controllers/telefone');
const Fornecedores = require('./controllers/fornecedores');

routes.get('/', (req, res) => {
  return res.json({ message: 'API projetocantina composição executando' });
});

routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);
routes.put('/produtos/:id', Produto.update);
routes.delete('/produtos/:id', Produto.deletar);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.deletar);

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.deletar);


routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.deletar);


routes.post('/fornecedores', Fornecedores.create);
routes.get('/fornecedores', Fornecedores.read);
routes.put('/fornecedores/:id', Fornecedores.update);
routes.delete('/fornecedores/:id', Fornecedores.deletar);

module.exports = routes;