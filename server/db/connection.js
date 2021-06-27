const Sequelize = require('sequelize');

const db = new Sequelize('campus_tudor_v1', 'root', 'licenta2021', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;