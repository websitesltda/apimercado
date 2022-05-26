const ModelEndereco = require('../models/endereco');

module.exports =
{
    async List(req, res) {
        try {
            const endereco = await ModelEndereco.findAll();
            return res.json(endereco);
        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const endereco = await ModelEndereco.create(
                {
                    id: req.body.id,
                    codigo_cliente: req.body.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );
            return res.json(endereco);
        } catch (error) {
            console.log(error);
        }
    },

    async Update(req, res) {
        try {
            const endereco = await ModelEndereco.findByPk(req.body.id);
            if (endereco) {
                endereco.nome = req.body.nome;
                await endereco.save();
            }
            return res.json(endereco);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {
            const endereco = await ModelEndereco.findByPk(req.body.id);
            return res.json(endereco);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {
            const endereco = await Modelendereco.findByPk(req.body.id);
            await endereco.destroy();
            return res.json(endereco);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}