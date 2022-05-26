const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Cidades extends sequelize.Model { }


Cidades.init(
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
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        sigla:
        {
            type: sequelize.STRING,
            allowNull: true,
        }      
    },
    {
        sequelize: database, modelName: 'cidades', shema
    }
)

module.exports = Cidades;