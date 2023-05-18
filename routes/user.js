const express = require('express')

const router = express.Router();

const addController = require('../controllers/add')

router.post('/user', addController.postAddUser)

router.post('/login', addController.postLogin)

module.exports = router