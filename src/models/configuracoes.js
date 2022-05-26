const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Configuracoes extends sequelize.Model { }


Configuracoes.init(
    {
        codigo_empresa:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        logo:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome_empresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cnpj:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        telefone:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        whatsapp:
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
        estado:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cidade:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        horario_atendimento:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        aberto:
        {
            type: sequelize.STRING,
            allowNull: true,
        }                
    },
    {
        sequelize: database, modelName: 'configuracoes', shema
    }
)

module.exports = Configuracoes;