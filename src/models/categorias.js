const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Categorias extends sequelize.Model { }


Categorias.init(
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
        }       
    },
    {
        sequelize: database, modelName: 'categorias', shema
    }
)

module.exports = Categorias;