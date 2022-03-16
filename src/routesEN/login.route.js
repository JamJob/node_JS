// @ts-nocheck
const express = require('express')
const router = express.Router()

const LoginController = require('../controllers/login.controllers')

// get all employees
router.get('/', LoginController.getEmployeeList)
