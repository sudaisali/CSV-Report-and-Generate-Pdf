const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const {Product} = require("../models/product") // Replace this with your Sequelize instance

const ProductLine = sequelize.define('ProductLine', {
  productLine: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false
  },
  textDescription: {
    type: DataTypes.STRING(4000),
    allowNull: true
  },
  htmlDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.BLOB('medium'),
    allowNull: true
  }
}, {
  tableName: 'productlines',
  timestamps: false // If you don't want Sequelize to add createdAt and updatedAt timestamps
});

// Define associations if needed
// ProductLine.hasMany(Product, {
//   foreignKey: 'productLine',
//   as: 'products'
// });

module.exports = ProductLine;
