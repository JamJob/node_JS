const express = require('express')
const router = express.Router()
const registerController = require('../controllersEN/register.controllers')

// get all employees
router.get('/', registerController.getRegisterList)

// get employee by ID
router.get('/:id', registerController.getRegisterByID)

// create new employee
router.post('/', registerController.createNewRegister)

// update employee
router.put('/:id', registerController.updateRegister)

// delete employee
router.delete('/:id', registerController.deleteRegister)

module.exports = router
