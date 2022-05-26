const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Uso_cupom extends sequelize.Model { }


Uso_cupom.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cupom:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        codigo_cliente:
        {
            type: sequelize.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'uso_cupom', shema
    }
)

module.exports = Uso_cupom;