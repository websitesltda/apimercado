const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Usuarios extends sequelize.Model { }


Usuarios.init(
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
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cpf:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cnpj:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        email:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        celular:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        usuario:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        senha:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        tipo_cadastro:
        {
            type: sequelize.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'usuarios', shema
    }
)

module.exports = Usuarios;