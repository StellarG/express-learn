const sequelize = require('sequelize');
//import connection from config/database.js
const db = require('../config/database');

//init datatypes
const { DataTypes } = sequelize;

//define schema
const Product = db.define('product', {
    //define attributes
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
    },
}, {

    timestamps: true,
    underscored: true
});

module.exports = Product;