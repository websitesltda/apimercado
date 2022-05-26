const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Pedidos extends sequelize.Model { }


Pedidos.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo_cliente:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        codigo_pedido:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        status_pedido:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        status_pagamento:
        {
            type: sequelize.STRING,
            allowNull: true,
        },tempo_entrega:
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
        troco:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        forma_pagamento:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        ids_adicionais:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        id_enderco:
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
        sequelize: database, modelName: 'pedidos', shema
    }
)

module.exports = Pedidos;