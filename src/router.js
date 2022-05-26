const express = require('express');
const cors = require('cors');

const controllerUsuarios = require('./controllers/UsuariosController');
const controllerEnderecos = require('./controllers/EnderecosCoontroller');
const controllerPedidos = require('./controllers/PedidosCoontroller');
const controllerProdutos = require('./controllers/ProdutosController');
const controllerCategorias = require('./controllers/CategoriasController');

const routes = express.Router();

routes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    routes.use(cors());
    next();
});

//////////////////////////// Usuários ///////////////////////

routes.get('/ListarUsuario', controllerUsuarios.List);

routes.post('/CriarUsuarios', controllerUsuarios.Create);

routes.post('/UpdateUsuarios', controllerUsuarios.Update);

routes.get('/GetOneUsuarios', controllerUsuarios.GetOne);

routes.post('/DeletarUsuarios', controllerUsuarios.Delete);
routes.use( express.static('./../public/images'));

/////////////////////////////////////////////////////////////

//////////////////////////// Enderecos ///////////////////////

routes.get('/ListarEdereco', controllerEnderecos.List);

routes.post('/CriarEdereco', controllerEnderecos.Create);

routes.post('/UpdateEdereco', controllerEnderecos.Update);

routes.get('/GetOneEdereco', controllerEnderecos.GetOne);

routes.post('/DeletarEdereco', controllerEnderecos.Delete);

/////////////////////////////////////////////////////////////

//////////////////////////// Pedidos ///////////////////////

routes.get('/ListarPedidos', controllerPedidos.List);

routes.post('/CriarPedidos', controllerPedidos.Create);

routes.post('/UpdatePedidos', controllerPedidos.Update);

routes.get('/GetOnePedidos', controllerPedidos.GetOne);

routes.post('/DeletarPedidos', controllerPedidos.Delete);

/////////////////////////////////////////////////////////////

//////////////////////////// Produtos ///////////////////////

routes.post('/ListarProdutos', controllerProdutos.List);

routes.post('/CriarProdutos', controllerProdutos.Create);

routes.post('/UpdateProdutos', controllerProdutos.Update);

routes.get('/GetOneProdutos', controllerProdutos.GetOne);

routes.post('/DeletarProdutos', controllerProdutos.Delete);

/////////////////////////////////////////////////////////////


//////////////////////////// Categorias ///////////////////////

routes.get('/ListarCategorias', controllerCategorias.List);

routes.post('/CriarCategorias', controllerCategorias.Create);

routes.post('/UpdateCategorias', controllerCategorias.Update);

routes.get('/GetOneCategorias', controllerCategorias.GetOne);

routes.post('/DeletarCategorias', controllerCategorias.Delete);

/////////////////////////////////////////////////////////////

module.exports = routes;
