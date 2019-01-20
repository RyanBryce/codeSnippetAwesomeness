var db = require('../models');
var bcrypt = require('bcrypt');
module.exports = {
  createUser: function(req, res){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) throw err
        req.body.password = hash;
        console.log(req.body)
        db.User.create(req.body)
        .then((response) => {
          console.log(response);
          req.session.user = {
            _id: response._id,
            username: response.username,
            email: response.email,
            profilePic: response.profilePic,
            loggedIn: true
          }
          res.status(200).json(req.session.user)
        })
        .catch((err) => {
          console.log(err
            );
          res.status(402).json("Sorry there was an error with inserting")
        })
      });
    });
 

    
  },
  loginUser: function (req, res) {
    console.log(req.body);
    db.User.findOne({email: req.body.email})
    .then((response) => {
      console.log(response);
        bcrypt.compare(req.body.password, response.password, (err, hash) => {
          // Store hash in your password DB.
          if (hash) {
            req.session.user = {
              _id: response._id,
              username: response.username,
              email: response.email,
              profilePic: response.profilePic
            }
            res.status(200).json(req.session.user)
          }else{
            res.status(418).send('incorect user name or password')
          }
        });
      })
      .catch((err) => {
        throw err
      })
  }
}