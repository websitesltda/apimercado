const ModelPedidos = require('../models/pedidos');
const ModelItens = require('../models/items');
const ModelAdicionais = require('../models/adicionais');

module.exports =
{
    async List(req, res) {
        try {
            const pedidos = await ModelPedidos.findAll();
            const adicionais = await ModelAdicionais.findAll();
            return res.json(pedidos);
        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const pedidos = await ModelPedidos.create(
                {
                    id: req.body.id,
                    codigo_cliente: req.body.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );

            const itens = await ModelItens.create(
                {
                    id: req.body.id,
                    codigo_cliente: req.body.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );

            return res.json([{"pedido":pedidos, "itens":itens}]);

        } catch (error) {
            console.log(error);
        }
    },

    async Update(req, res) {
        try {
            const pedidos = await ModelPedidos.findByPk(req.body.id);
            if (pedidos) {
                pedidos.nome = req.body.nome;
                await pedidos.save();
            }
            return res.json(pedidos);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {
            const pedidos = await ModelPedidos.findByPk(req.body.id);
            return res.json(pedidos);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {
            const pedidos = await ModelPedidos.findByPk(req.body.id);
            await pedidos.destroy();
            return res.json(pedidos);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}