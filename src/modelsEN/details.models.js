const dbConn = require('../../config/db.config')

const Details = function (details) {
  this.name = details.name
  this.From = details.From
  this.To = details.To
  this.Duration = details.Duration
  this.TourType = details.TourType
  this.price = details.price
  this.overView = details.overView
  this.Highlights = details.Highlights
  this.Itinerary = details.Itinerary
  this.Include = details.Include
  this.in1 = details.in1
  this.in2 = details.in2
  this.in3 = details.in3
  this.in4 = details.in4
  this.in5 = details.in5
  this.in6 = details.in6
  this.ex1 = details.ex1
  this.ex2 = details.ex2
  this.ex3 = details.ex3
  this.ex4 = details.ex4
  this.exculuded = details.exculuded
  this.created_at = new Date()
  this.updated_at = new Date()
}

// get all Detailss
Details.getAllDetailss = (result) => {
  dbConn.query('SELECT * FROM details WHERE is_deleted=1', (err, res) => {
    if (err) {
      console.log('Error while fetching employess', err)
      result(null, err)
    } else {
      console.log('Detailss fetched successfully')
      result(null, res)
    }
  })
}

// get Details by ID from DB
Details.getDetailsByID = (id, result) => {
  dbConn.query('SELECT * FROM details WHERE id=?', id, (err, res) => {
    if (err) {
      console.log('Error while fetching Details by id', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

// create new Details
Details.createDetails = (DetailsReqData, result) => {
  dbConn.query('INSERT INTO details SET ? ', DetailsReqData, (err, res) => {
    if (err) {
      console.log('Error while inserting data')
      result(null, err)
    } else {
      console.log('Details created successfully')
      result(null, res)
    }
  })
}
// update Details
Details.updateDetails = (id, DetailsReqData, result) => {
  dbConn.query('UPDATE details SET name=?,From=?,To=?,Duration=?,TourType=?,price=?,overView=?,Itinerary=?,in1=?,in2=?,in3=?,in4=?,in5=?,in6=?,ex1=?,ex2=?,ex3=?,ex4=? WHERE id = ?', [DetailsReqData.name, DetailsReqData.From, DetailsReqData.To, DetailsReqData.Duration, DetailsReqData.TourType, DetailsReqData.price, DetailsReqData.overView, DetailsReqData.Highlights, DetailsReqData.Itinerary, DetailsReqData.Include, DetailsReqData.in1, DetailsReqData.in2, DetailsReqData.in3, DetailsReqData.in4, DetailsReqData.in5, DetailsReqData.in6, DetailsReqData.ex1, DetailsReqData.ex2, DetailsReqData.ex3, DetailsReqData.ex4, id], (err, res) => {
    if (err) {
      console.log('Error while updating the Details')
      result(null, err)
    } else {
      console.log('Details updated successfully')
      result(null, res)
    }
  })
}

// delete Details
Details.deleteDetails = (id, result) => {
  // dbConn.query('DELETE FROM Detailss WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the Details');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query('UPDATE details SET is_deleted=? WHERE id = ?', [1, id], (err, res) => {
    if (err) {
      console.log('Error while deleting the Details')
      result(null, err)
    } else {
      console.log('Details deleted successfully')
      result(null, res)
    }
  })
}

module.exports = Details
