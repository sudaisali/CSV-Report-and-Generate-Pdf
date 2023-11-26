const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const Employee = require('../models/employee') // Replace this with your Sequelize instance

const Office = sequelize.define('Office', {
  officeCode: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  addressLine1: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  addressLine2: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  territory: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  tableName: 'offices',
  timestamps: false // If you don't want Sequelize to add createdAt and updatedAt timestamps
});

// Define associations if needed
// Office.hasMany(Employee, {
//   foreignKey: 'officeCode'
// });

module.exports = Office;
