const userCrtl = require('../../controllers/userCtrl');
const router = require('express').Router();

//middleware to check if the user is logged in or not
function authCheck(req, res, next) {
  if (req.session.user.loggedIn && req.session.user._id === req.body._id) {
    next()
  } else {
    res.status(401).end()
  }
}

router.route('/')
  .post(userCrtl.createUser)
  .put(authCheck, userCrtl.update)
  
router.route('/login')
  .post(userCrtl.loginUser)

router.route('/session')
  .get(userCrtl.session)

// router.route('/:id')
// .get(function (req, res) {
  
// })
// .post(function(req, res){
  
// })

// .delete(function (req, res) {
  
// })
  



module.exports = router