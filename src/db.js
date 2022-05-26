const sequelize = require('sequelize');

const database = new sequelize('mercado', 'uroot', '@Prog2020',
  {
    dialect: 'mysql', host: 'localhost', port: 3306
  });

database.sync();

module.exports = database;
