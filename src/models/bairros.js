const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Bairros extends sequelize.Model { }


Bairros.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo_cidade:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        codigo_bairro:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor_frete:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        frete_gratis:
        {
            type: sequelize.STRING,
            allowNull: true,
        }       
    },
    {
        sequelize: database, modelName: 'bairros', shema
    }
)

module.exports = Bairros;