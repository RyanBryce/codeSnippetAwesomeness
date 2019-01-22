const userRoutes = require('./userRoutes');
const resetRoutes = require('./passwordResetRoutes');
const router = require('express').Router();

router.use("/user", userRoutes);
router.use("/reset", resetRoutes);

module.exports = router