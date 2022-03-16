const express = require('express')
const router = express.Router()

const detailsController = require('../controllersEN/details.controllers')

// get all detailss
router.get('/', detailsController.getDetailsList)

// get details by ID
router.get('/:id', detailsController.getDetailsByID)

// create new details
router.post('/', detailsController.createNewDetails)

// update details
router.put('/:id', detailsController.updateDetails)

// delete details
router.delete('/:id', detailsController.deleteDetails)

module.exports = router
