const cartCtrl= require('../../controllers/cartCtrl');
const router = require('express').Router();


router.route('/')
  .get(cartCtrl.getCart)

router.route('/:id')
  .delete(cartCtrl.deleteItemFromCart)
  .post(cartCtrl.addToCart)


module.exports = router