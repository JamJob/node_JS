const dbConn = require('../../config/db.config')

const Register = function (register) {
  this.first_name = register.first_name
  this.last_name = register.last_name
  this.email = register.email
  this.phone = register.phone
  this.price = register.price
  this.status = register.status ? register.status : 1
  this.created_at = new Date()
  this.updated_at = new Date()
}

// get all Register
Register.getAllRegister = (result) => {
  dbConn.query('SELECT * FROM Register WHERE is_deleted=0', (err, res) => {
    if (err) {
      console.log('Error while fetching employess', err)
      result(null, err)
    } else {
      console.log('Register fetched successfully')
      result(null, res)
    }
  })
}

// get Register by ID from DB
Register.getRegisterByID = (id, result) => {
  dbConn.query('SELECT * FROM Register WHERE id=?', id, (err, res) => {
    if (err) {
      console.log('Error while fetching Register by id', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

// create new Register
Register.createRegister = (RegisterReqData, result) => {
  dbConn.query('INSERT INTO Register SET ? ', RegisterReqData, (err, res) => {
    if (err) {
      console.log('Error while inserting data')
      result(null, err)
    } else {
      console.log('Register created successfully')
      result(null, res)
    }
  })
}
// update Register
Register.updateRegister = (id, RegisterReqData, result) => {
  dbConn.query('UPDATE Register SET first_name=?,last_name=?,email=?,phone=?,price=? WHERE id = ?', [RegisterReqData.first_name, RegisterReqData.last_name, RegisterReqData.email, RegisterReqData.phone, RegisterReqData.organization, RegisterReqData.designation, RegisterReqData.salary, id], (err, res) => {
    if (err) {
      console.log('Error while updating the Register')
      result(null, err)
    } else {
      console.log('Register updated successfully')
      result(null, res)
    }
  })
}

// delete Register
Register.deleteRegister = (id, result) => {
  // dbConn.query('DELETE FROM Register WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the Register');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query('UPDATE Register SET is_deleted=? WHERE id = ?', [1, id], (err, res) => {
    if (err) {
      console.log('Error while deleting the Register')
      result(null, err)
    } else {
      console.log('Register deleted successfully')
      result(null, res)
    }
  })
}

module.exports = Register
