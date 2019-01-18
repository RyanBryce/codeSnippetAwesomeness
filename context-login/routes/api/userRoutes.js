const userCrtl = require('../../controllers/userCtrl');
const router = require('express').Router();

router.route('/')
  .post(userCrtl.createUser)

router.route('/:id')
  .get(function (req, res) {

  })
  .post(function(req, res){

  })
  .put(function (req, res) {

  })
  .delete(function (req, res) {

  })



module.exports = router