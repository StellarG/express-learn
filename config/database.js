const sequelize = require('sequelize');

//create connection to database
const db = new sequelize('postgres://postgres:123456@localhost:5432/products');


module.exports = db;