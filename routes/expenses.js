const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/addExpense")

router.post("/expense", expenseController.postAddExpense)

router.get("/expense", expenseController.getAddExpense)

router.delete("/expense/:id", expenseController.deleteExpense)

module.exports = router;