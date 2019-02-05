const userRoutes = require('./userRoutes');
const resetRoutes = require('./passwordResetRoutes');
const addressRoutes = require('./addressRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');
const router = require('express').Router();

router.use("/user", userRoutes);
router.use("/reset", resetRoutes);
router.use("/address", addressRoutes);
router.use("/order", orderRoutes);
router.use("/cart", cartRoutes);


module.exports = router