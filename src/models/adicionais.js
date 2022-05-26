const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Adicionais extends sequelize.Model { }


Adicionais.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo_adicional:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        gratis:
        {
            type: sequelize.STRING,
            allowNull: true,
        }        
    },
    {
        sequelize: database, modelName: 'adicionais', shema
    }
)

module.exports = Adicionais;