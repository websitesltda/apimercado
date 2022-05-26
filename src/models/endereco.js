const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Endereco extends sequelize.Model { }


Endereco.init(
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
        apelido:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        rua:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        numero:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        bairro:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        complemento:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cep:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        estado:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cidade:
        {
            type: sequelize.STRING,
            allowNull: true,
        }
       
    },
    {
        sequelize: database, modelName: 'enderco', shema
    }
)

module.exports = Endereco;