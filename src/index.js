const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // SQLite database file
  });

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
  
  // Sync the model with the database
  sequelize.sync().then(() => {
    console.log('Database and tables created!');
  });

  const api = express.Router().use().use()
  app.use('/api',api);
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });