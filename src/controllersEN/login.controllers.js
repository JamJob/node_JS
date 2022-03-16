// @ts-nocheck
const LoginModuel = require('../models/login.model')

exports.getEmployeeList = (req, res) => {
  // console.log('here all employees list');
  // @ts-ignore
  LoginModuel.getAllLogin((err, employees) => {
    console.log('We are here')
    if (err) { res.send(err) }
    console.log('Employees', employees)
    res.send(employees)
  })
}
