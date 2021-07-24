const express = require('express');
const { addtoCart } = require('../controllers/cart');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addtoCart);

module.exports = router;
