const Sequelize = require('sequelize');

const sequelize = new Sequelize('campus_tudor_v1', 'root', 'licenta2021', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;