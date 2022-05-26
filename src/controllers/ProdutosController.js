const ModelProdutos = require('../models/produtos');
const Sequelize = require('sequelize');


module.exports =
{
    async List(req, res) {
        try {
            const Op = Sequelize.Op;              // biblioteca de operadores
            const buscar = `%`+req.body.buscar+`%`;
            const codigo = req.body.categoria
            const produtos = await ModelProdutos.findAll({
                where: [{ codigo_categoria: [codigo], nome: { [Op.like]: buscar } }]
            });

            return res.json(produtos);
        } catch (erro) {
            return console.error("Erro ao trazer lista de produtos: ", erro);
        }
    },

    async Create(req, res) {
        try {
            const produtos = await ModelProdutos.create(
                {
                    id: req.body.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );
            return res.json(produtos);
        } catch (erro) {
            return console.error("Erro ao criar novo produto: ", erro);
        }
    },

    async Update(req, res) {
        try {
            const produtos = await ModelProdutos.findByPk(req.body.id);
            if (produtos) {
                produtos.logo = req.body.logo;
                await produtos.save();
            }
            return res.json(produtos);
        } catch (erro) {
            return console.error("Erro ao atualizar produto: ", erro);
        }
    },

    async GetOne(req, res) {
        try {
            const produtos = await ModelProdutos.findByPk(req.body.id);
            return res.json(produtos);
        } catch (erro) {
            return console.error("Erro ao trazer produto: ", erro);
        }
    },

    async Delete(req, res) {
        try {
            const produtos = await ModelProdutos.findByPk(req.body.id);
            await produtos.destroy();
            return res.json(produtos);
        } catch (erro) {
            return console.error("Erro ao excluir produto: ", erro);
        }
    }


}