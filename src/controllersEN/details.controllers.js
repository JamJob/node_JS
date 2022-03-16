
const DetailsModel = require('../modelsEN/details.models')

// get all Details list
// @ts-ignore
exports.getDetailsList = (_req, res) => {
  // console.log('here all Detailss list');
  // @ts-ignore
  DetailsModel.getAllDetailss((err, detailss) => {
    console.log('We are here')
    if (err) { res.send(err) }
    console.log('Detailss', detailss)
    res.send(detailss)
  })
}
// get Details by ID
exports.getDetailsByID = (req, res) => {
  // console.log('get emp by id');
  // @ts-ignore
  DetailsModel.getDetailsByID(req.params.id, (err, details) => {
    if (err) { res.send(err) }
    console.log('single Details data', details)
    res.send(details)
  })
}

// create new Details
exports.createNewDetails = (req, res) => {
  // @ts-ignore
  const DetailsReqData = new DetailsModel(req.body)
  console.log('DetailsReqData', DetailsReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    DetailsModel.createDetails(DetailsReqData, (err, details) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Details Created Successfully', data: details.insertId })
    })
  }
}

// update Details
exports.updateDetails = (req, res) => {
  // @ts-ignore
  const DetailsReqData = new DetailsModel(req.body)
  console.log('DetailsReqData update', DetailsReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    DetailsModel.updateDetails(req.params.id, DetailsReqData, (err, details) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Details updated Successfully' })
    })
  }
}

// delete Details
exports.deleteDetails = (req, res) => {
  // @ts-ignore
  DetailsModel.deleteDetails(req.params.id, (err, details) => {
    if (err) { res.send(err) }
    res.json({ success: true, message: 'Details deleted successully!' })
  })
}
