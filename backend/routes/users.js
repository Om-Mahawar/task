const express = require('express');
const auth = require('../middleware/auth');
const { signin, signup, placeOrder } = require('../controllers/users.js');

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/placeorder', auth, placeOrder);

module.exports = router;
