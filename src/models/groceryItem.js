const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const GroceryItem = sequelize.define('GroceryItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = GroceryItem;