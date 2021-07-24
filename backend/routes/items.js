const express = require('express');
const {
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/items.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', getItem);
router.post('/', auth, createItem);
router.patch('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

module.exports = router;
