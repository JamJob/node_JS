
const RegisterModel = require('../modelsEN/Register.model')

// get all Register list
// @ts-ignore
exports.getRegisterList = (req, res) => {
  // console.log('here all Register list');
  // @ts-ignore
  RegisterModel.getAllRegister((err, Register) => {
    console.log('We are here')
    if (err) { res.send(err) }
    console.log('Register', Register)
    res.send(Register)
  })
}
// get Register by ID
exports.getRegisterByID = (req, res) => {
  // console.log('get emp by id');
  // @ts-ignore
  RegisterModel.getRegisterByID(req.params.id, (err, Register) => {
    if (err) { res.send(err) }
    console.log('single Register data', Register)
    res.send(Register)
  })
}

// create new Register
exports.createNewRegister = (req, res) => {
  // @ts-ignore
  const RegisterReqData = new RegisterModel(req.body)
  console.log('RegisterReqData', RegisterReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    RegisterModel.createRegister(RegisterReqData, (err, Register) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Register Created Successfully', data: Register.insertId })
    })
  }
}

// update Register
exports.updateRegister = (req, res) => {
  // @ts-ignore
  const RegisterReqData = new RegisterModel(req.body)
  console.log('RegisterReqData update', RegisterReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    RegisterModel.updateRegister(req.params.id, RegisterReqData, (err, Register) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Register updated Successfully' })
    })
  }
}

// delete Register
exports.deleteRegister = (req, res) => {
  // @ts-ignore
  RegisterModel.deleteRegister(req.params.id, (err, Register) => {
    if (err) { res.send(err) }
    res.json({ success: true, message: 'Register deleted successully!' })
  })
}
