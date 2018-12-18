var db = require('../models');
module.exports = {
  createUser: function(req, res){
    db.User.create(req.body)
    .then((response) => {
      console.log(response);
    })
  }
}