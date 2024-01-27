const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./database');

const admincontroller = require("./admin/controller");
const userController = require("./user/controller");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());


// Sync the model with the database
sequelize.sync().then(() => {
  console.log("Database and tables created!");
});

const api = express.Router().use("/user",userController).use("/admin",admincontroller);
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
