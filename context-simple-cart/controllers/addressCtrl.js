// {
//   address: String,
//   //appartment number
//   aptNumber: String,
//   city: String,
//   country: String,
//   state: String,
//   zipcode: Number nim/max 5-9
//   phone: String,
// }

var db = require('../models');
module.exports = {
  createAddress: (req, res) => {
    db.Address.create(req.body)
    .then((address) => {
      
      console.log(address);
      res.end()
    })
    .catch((err) => {
      console.log(err);
      res.status(409).end()
    })
  },
  getAddressById: (req, res) => {

    db.Address.findById(req.params.id)
    .then((address) => {
      res.status(200).json(address)
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end()
    })
  },
  updateAddressById: (req, res) => {

    db.Address.findByIdAndUpdate(
      req.params.id,
      req.body, //update request
      {
        new: true
      }
      )
      .then((address) => {
        res.status(200).json(address)
      })
      .catch((err) => {
        console.log(err);
        res.status(404).end()
      })
  }

}