const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Items_Pedido extends sequelize.Model { }


Items_Pedido.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo_pedido:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        produto:
        {
            type: sequelize.STRING,
            allowNull: true,
        }, 
        adicional:
        {
            type: sequelize.STRING,
            allowNull: true,
        }, 
        quantidade:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        valor:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        desconto:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        obs:
        {
            type: sequelize.STRING,
            allowNull: true,
        }
       
    },
    {
        sequelize: database, modelName: 'items_pedido', shema
    }
)

module.exports = Items_Pedido;