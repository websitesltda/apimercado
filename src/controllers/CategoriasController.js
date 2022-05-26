const ModelCategorias = require('../models/categorias');


module.exports =
{
    async List(req, res) {
        try {
            const categorias = await ModelCategorias.findAll();

            return res.json(categorias);
        } catch (erro) {
            return console.error("Erro ao trazer lista de categorias: ", erro);
        }
    },

    async Create(req, res) {
        try {
            const categorias = await ModelCategorias.create(
                {
                    id: req.body.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );
            return res.json(categorias);
        } catch (erro) {
            return console.error("Erro ao criar novo produto: ", erro);
        }
    },

    async Update(req, res) {
        try {
            const categorias = await ModelCategorias.findByPk(req.body.id);
            if (categorias) {
                categorias.logo = req.body.logo;
                await categorias.save();
            }
            return res.json(categorias);
        } catch (erro) {
            return console.error("Erro ao atualizar produto: ", erro);
        }
    },

    async GetOne(req, res) {
        try {
            const categorias = await ModelCategorias.findByPk(req.body.id);
            return res.json(categorias);
        } catch (erro) {
            return console.error("Erro ao trazer produto: ", erro);
        }
    },

    async Delete(req, res) {
        try {
            const categorias = await ModelCategorias.findByPk(req.body.id);
            await categorias.destroy();
            return res.json(categorias);
        } catch (erro) {
            return console.error("Erro ao excluir produto: ", erro);
        }
    }


}