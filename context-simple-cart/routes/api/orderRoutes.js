const orderCtrl = require('../../controllers/orderCrtl');
const router = require('express').Router();


router.route('/')
.post(orderCtrl.createOrder)




module.exports = router