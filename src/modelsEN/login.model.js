const dbConn = require('../../config/db.config')

const Login = function (login) {
  this.id = login.id
  this.email = login.email
  this.password = login.password
}

Login.getAllLogin = (result) => {
  dbConn.query('SELECT * FROM login ', (err, res) => {
    if (err) {
      console.log('Error while fetching login', err)
      result(null, err)
    } else {
      console.log('login fetched successfully')
      result(null, res)
    }
  })
}
module.exports = Login
