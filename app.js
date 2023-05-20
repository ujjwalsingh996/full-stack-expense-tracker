const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const User = require("./models/users");

const addUserRoute = require("./routes/user");

const addExpenseRoute = require("./routes/expenses");

const EXPENSES = require("./models/expenseTable");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(addUserRoute);

app.use(addExpenseRoute);

User.hasMany(EXPENSES);
EXPENSES.belongsTo(User);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
