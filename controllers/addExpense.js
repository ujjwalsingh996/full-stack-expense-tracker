const EXPENSES = require("../models/expenseTable")

exports.postAddExpense = (req, res, next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category
    EXPENSES.create({
        amount: amount,
        description: description,
        category: category,
        userId: 1
    }).then((result) => {
        console.log("Expense ADDED")
    }).catch((err) => {
        console.log(err)
    })
}

exports.getAddExpense = (req, res, next) => {
    EXPENSES.findAll({where: {userId : req.user.id} }).then((expenses) => {
        res.send(expenses)
    }).catch((err) =>{
        console.log(err)
    })
}

exports.deleteExpense = (req, res, next) => {
    const expensesId =  req.params.id
    EXPENSES.findByPk(expensesId).then((expense) => {
        expense.destroy();
        console.log("expense Deleted")
    })
}