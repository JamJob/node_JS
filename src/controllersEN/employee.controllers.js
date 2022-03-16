
const EmployeeModel = require('../modelsEN/employee.model')

// get all employee list
// @ts-ignore
exports.getEmployeeList = (req, res) => {
  // console.log('here all employees list');
  // @ts-ignore
  EmployeeModel.getAllEmployees((err, employees) => {
    console.log('We are here')
    if (err) { res.send(err) }
    console.log('Employees', employees)
    res.send(employees)
  })
}
// get employee by ID
exports.getEmployeeByID = (req, res) => {
  // console.log('get emp by id');
  // @ts-ignore
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) { res.send(err) }
    console.log('single employee data', employee)
    res.send(employee)
  })
}

// create new employee
exports.createNewEmployee = (req, res) => {
  // @ts-ignore
  const employeeReqData = new EmployeeModel(req.body)
  console.log('employeeReqData', employeeReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Employee Created Successfully', data: employee.insertId })
    })
  }
}

// update employee
exports.updateEmployee = (req, res) => {
  // @ts-ignore
  const employeeReqData = new EmployeeModel(req.body)
  console.log('employeeReqData update', employeeReqData)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    // @ts-ignore
    EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
      if (err) { res.send(err) }
      res.json({ status: true, message: 'Employee updated Successfully' })
    })
  }
}

// delete employee
exports.deleteEmployee = (req, res) => {
  // @ts-ignore
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) { res.send(err) }
    res.json({ success: true, message: 'Employee deleted successully!' })
  })
}
