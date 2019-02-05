//order data model (need the following _ids)
//(add user _id if user is loggedIn)
// {
//   user: _id,
//   products: [_id],
//   address: _id
// }
//user model (add order to user if user is loggedIn)
// {
//   orders: _id from order
// }

var db = require('../models');

module.exports = {
  createOrder: function(req, res){
    if (req.session.user.loggedIf) {
      db.Order.create({
        user: req.session.user._id,
        products: req.session.cart,
        address: req.session.address._id
      })
      .then((order) => {
        res.status(200).json(order);
      })
      .catch((err) => {
        console.log(err);
        res.status(409).json(err)
      })
    } else {
      db.Order.create({
        products: req.session.cart,
        address: req.session.address._id
      })
      .then((order) => {
          res.status(200).json(order);
      })
      .catch((err) => {
          console.log(err);
          res.status(409).json(err)
      })
    }
  }
}