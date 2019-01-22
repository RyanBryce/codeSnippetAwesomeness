const resetCrtl = require('../../controllers/passwordResetCtrl');
const router = require('express').Router();


router.route('/')
  .get(resetCrtl.checkToken)
  .post(resetCrtl.forgot)
  .put(resetCrtl.resetPassword)


module.exports = router