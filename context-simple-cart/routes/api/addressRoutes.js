const addressCtrl = require('../../controllers/addressCtrl');
const router = require('express').Router();


router.route('/')
  .post(addressCtrl.createAddress)

router.route('/:id')
  .get(addressCtrl.getAddressById)
  .put(addressCtrl.updateAddressById)

module.exports = router