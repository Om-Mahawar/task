const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  id: mongoose.Schema.Types.ObjectId,
});

const Items = mongoose.model('Items', itemSchema);

module.exports = Items;
