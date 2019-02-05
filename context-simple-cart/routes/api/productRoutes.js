const productCtrl = require('../../controllers/productCtrl');
const router = require('express').Router();


router.route('/')
  .get(productCtrl.getAllProducts)
  .post(productCtrl.createProduct)


router.route('/:id')
  .get(productCtrl.getProductById)
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct)




module.exports = router