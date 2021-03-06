const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var db = require('../models');
module.exports = {
  forgot: function (req, res, next) {
    new Promise((resolve, reject) => {
        // generate reset token
      crypto.randomBytes(20, (err, buf) => {
        if (err) return reject(err);
        const token = buf.toString('hex');
        resolve(token);
      });
    })
    .then((token) => {
      return new Promise((resolve, reject) => {
        // search for user with the given email
        db.User.findOne({        
            email: req.body.email
        })
        .then((userObj) => {
          console.log("this is userObj", userObj);
          if (!userObj) return reject(404);
          // user exists, assign token with expiration date
          const resetPasswordToken = token;
          const resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

          // save the user model with the newly added
          // token and expiration date
          db.User.findOneAndUpdate(
            {
              email: req.body.email
            },
            {
              $set: {
              resetPasswordToken,
              resetPasswordExpires
              }
            },
            {
              new: true
            })
            .then(function (updatedUser) {
              console.log("this is updated user", updatedUser);
              //  console.log(val);
              // if (!val) return reject(err);

              resolve({
                user: updatedUser,
                token
              });
            });
          });
        });
      })
      .then((promObj) => {
        console.log(promObj);
        return new Promise((resolve, reject) => {
          const gmailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.COMPEMAIL,
              pass: process.env.COMPPASSWORD
            }
          });

          var mailOptions = {
            to: promObj.user.email,
            from: 'componentsuit@gmail.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              'http://' + req.headers.host + '/password/reset/' + promObj.token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
          }

          gmailTransporter.sendMail(mailOptions, (err) => {
            if (err) {
              console.log(err);
              return reject(err);
            }

            resolve();
          });
        });
      })
      .then(() => {
        console.log('WORKED!!!!!!');
        res.status(200).send("yeah!!!!")
      })
      .catch((err) => {
        //check if the error is the one from the DB where the user was not found
        if (err == 404) {
          return res.sendStatus(404);
        }
        console.log('ahhh shit');
        return res.status(500).send(err);
      });
  },
  checkToken: (req, res) => {
    console.log(req.query);
    db.User.findOne({
        resetPasswordToken: req.query.token,
        resetPasswordExpires: {
          $gt: Date.now()
        }
      })
      .then(function (user) {
       
        if (!user && typeof user === "object") {
          res.send({
            tokenStatus: "expired"
          });
        } else {
          res.send({
            email: user.email,
            tokenStatus: "success"
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  resetPassword: (req, res) => {

    new Promise((resolve, reject) => {
        // search for user with the given email
        db.User.findOne({
            email: req.body.email
        }).then((userObj) => {
          const resetPassword = req.body.password
          const saltRounds = 10;
          bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(resetPassword, salt, function (err, hash) {
              // Store hash in your password DB.
              // save the user model with the newly added
              // token and expiration date
              console.log(userObj)
              db.User.findOneAndUpdate(
                {
                  _id: userObj._id
                },
                {
                  $set: {
                    password: hash,
                    resetPasswordToken: '',
                    resetPasswordExpires: ''
                  }
                })
                .then(function (updateRes) {
                  //  console.log(userObj);
                  // if (!userObj) return reject(err);

                  resolve({
                    user: userObj
                  });
                });
            });
          });


        });
      })
      .then((userObj) => {
        console.log(userObj);
        return new Promise((resolve, reject) => {
          const gmailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.WARMODEEMAIL,
              /////////////////add config file to pull in password
              pass: process.env.WARMODEPASSWORD
            }
          });

          var mailOptions = {
            to: userObj.user.email,
            from: 'welcometowarmode@gmail.com',
            subject: 'welcometowarmode.com Password Reset',
            text: 'Hello,\n\n' +
              'This is a confirmation that the password for your account ' + userObj.user.email + ' has just been changed.\n'
          }

          gmailTransporter.sendMail(mailOptions, (err) => {
            if (err) {
              console.log(err);
              return reject(err);
            }

            resolve();
          });
        });
      })
      .then(() => {
        console.log('WORKED!!!!!!');
        res.status(200).send("yeah!!!!")
      })
      .catch((err) => {
        //check if the error is the one from the DB where the user was not found
        if (err == 404) {
          return res.sendStatus(404);
        }
        console.log('ahhh shit');
        return res.status(500).send(err);
      });
  }
}