const express = require('express')
const router = express.Router()

const overViewController = require('../controllersEN/overView')

// get all OverViews
router.get('/', overViewController.getOverViewList)

// get OverView by ID
router.get('/:id', overViewController.getOverViewByID)

// create new OverView
router.post('/', overViewController.createNewOverView)

// update OverView
router.put('/:id', overViewController.updateOverView)

// delete OverView
router.delete('/:id', overViewController.deleteOverView)

module.exports = router
