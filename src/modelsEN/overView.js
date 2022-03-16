const dbConn = require('../../config/db.config')

const OverView = function (overView) {
  this.first_name = overView.first_name
  this.Overview = overView.Overview
  this.price = overView.price
  this.created_at = new Date()
  this.updated_at = new Date()
}

// get all OverViews
OverView.getAllOverViews = (result) => {
  dbConn.query('SELECT * FROM overviewchoice WHERE is_deleted=1', (err, res) => {
    if (err) {
      console.log('Error while fetching employess', err)
      result(null, err)
    } else {
      console.log('OverViews fetched successfully')
      result(null, res)
    }
  })
}

// get OverView by ID from DB
OverView.getOverViewByID = (id, result) => {
  dbConn.query('SELECT * FROM overviewchoice WHERE id=?', id, (err, res) => {
    if (err) {
      console.log('Error while fetching OverView by id', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

// create new OverView
OverView.createOverView = (overViewReqData, result) => {
  dbConn.query('INSERT INTO overviewchoice SET ? ', overViewReqData, (err, res) => {
    if (err) {
      console.log('Error while inserting data')
      result(null, err)
    } else {
      console.log('OverView created successfully')
      result(null, res)
    }
  })
}
// update OverView
OverView.updateOverView = (id, overViewReqData, result) => {
  dbConn.query('UPDATE overviewchoice SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?', [overViewReqData.first_name, overViewReqData.last_name, overViewReqData.email, overViewReqData.phone, overViewReqData.organization, overViewReqData.designation, overViewReqData.salary, id], (err, res) => {
    if (err) {
      console.log('Error while updating the OverView')
      result(null, err)
    } else {
      console.log('OverView updated successfully')
      result(null, res)
    }
  })
}

// delete OverView
OverView.deleteOverView = (id, result) => {
  // dbConn.query('DELETE FROM OverViews WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the OverView');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query('UPDATE overviewchoice SET is_deleted=? WHERE id = ?', [1, id], (err, res) => {
    if (err) {
      console.log('Error while deleting the OverView')
      result(null, err)
    } else {
      console.log('OverView deleted successfully')
      result(null, res)
    }
  })
}

module.exports = OverView
