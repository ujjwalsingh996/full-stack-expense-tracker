const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/addExpense")

const userAuthentication = require("../middleware/auth")

router.post("/expense", expenseController.postAddExpense)

router.get("/expense", userAuthentication.authenticate, expenseController.getAddExpense)

router.delete("/expense/:id", expenseController.deleteExpense)

module.exports = router;