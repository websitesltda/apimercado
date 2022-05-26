const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Cupom extends sequelize.Model { }


Cupom.init(
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
        porcentagem:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        qnt_disponiveis:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valido:
        {
            type: sequelize.STRING,
            allowNull: true,
        }   
    },
    {
        sequelize: database, modelName: 'cupoms', shema
    }
)

module.exports = Cupom;