const mongoose = require('mongoose');
const Item = require('../models/items.js');

const getItem = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const createItem = async (req, res) => {
  const item = req.body;

  const newItem = new Item({
    ...item,
  });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  const item = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Wrong Id');
  }

  const updatedItem = await Item.findByIdAndUpdate(_id, item, {
    new: true,
  });

  res.json(updatedItem);
};

const deleteItem = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Wrong Id');
  }

  const deletedItem = await Item.findByIdAndDelete(_id);
  res.json(deletedItem);
};

module.exports = {
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
