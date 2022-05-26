const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Produtos extends sequelize.Model { }


Produtos.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo_categoria:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        codigo_produto:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        foto:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        tipo_de_saida:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        adicionais:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        estoque:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valida_promocional:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        acima_promocional:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor_varejo:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor_atacado:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor_promocional:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor_promocional_atacado:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        validade:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        oferta:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        porcentagem_oferta:
        {
            type: sequelize.STRING,
            allowNull: true,
        }           
    },
    {
        sequelize: database, modelName: 'produtos', shema
    }
)

module.exports = Produtos;