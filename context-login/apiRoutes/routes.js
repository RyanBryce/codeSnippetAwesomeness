const userCrtl = require('../controllers/userCtrl');
const router = require('express').Router();
router.get('/api/user/:id', function (req, res) {
  
})
router.post('/api/user', userCrtl.createUser)
router.put('/api/user/:id', function (req, res) {

})
router.delete('/api/user/:id', function (req, res) {

})

module.exports = router