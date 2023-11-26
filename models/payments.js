const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const Customer = require('./customer') // Replace this with your Sequelize instance
const Order = require('./orders') // Replace this with your Sequelize instance

const Payment = sequelize.define('Payment', {
  customerNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Customer',
      key: 'customerNumber'
    }
  },
  checkNumber: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'payments',
  timestamps: false // If you don't want Sequelize to add createdAt and updatedAt timestamps
});

// Define associations if needed
Payment.belongsTo(Customer, {
  foreignKey: 'customerNumber',
  as: 'customer'
});



module.exports = Payment;
