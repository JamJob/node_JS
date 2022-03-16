
const OverViewModel = require('../modelsEN/overView')

// get all OverView list
// @ts-ignore
exports.getOverViewList = (req, res) => {
  // console.log('here all OverViews list');
  // @ts-ignore
  OverViewModel.getAllOverViews((err, overViews) => {
    console.log('We are here')
    if (err) { res.send(err) }
    console.log('OverViews', overViews)
    res.send(overViews)
  })
}
// get OverView by ID
exports.getOverViewByID = (req, res) => {
  // console.log('get emp by id');
  // @ts-ignore
  OverViewModel.getOverViewByID(req.params.id, (err, OverView) => {
    if (err) { res.send(err) }
    console.log('single OverView data', OverView)
    res.send(OverView)
  })
}

// create new OverView
exports.createNewOverView = (req, res) => {
  // @ts-ignore
  const OverViewReqData = new OverViewModel(req.body)
  console.log('OverViewReqData', OverViewReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    OverViewModel.createOverView(OverViewReqData, (err, OverView) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'OverView Created Successfully', data: OverView.insertId })
    })
  }
}

// update OverView
exports.updateOverView = (req, res) => {
  // @ts-ignore
  const OverViewReqData = new OverViewModel(req.body)
  console.log('OverViewReqData update', OverViewReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    OverViewModel.updateOverView(req.params.id, OverViewReqData, (err, OverView) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'OverView updated Successfully' })
    })
  }
}

// delete OverView
exports.deleteOverView = (req, res) => {
  // @ts-ignore
  OverViewModel.deleteOverView(req.params.id, (err, OverView) => {
    if (err) { res.send(err) }
    res.json({ success: true, message: 'OverView deleted successully!' })
  })
}
