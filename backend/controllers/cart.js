const Cart = require('../models/cart.js');

const addtoCart = async (req, res) => {
  const { itemId, quantity, price } = req.body;
  const userId = req.userId;

  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      let itemIndex = await cart.items.findIndex(
        (item) => item.itemId === itemId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity = quantity;
        cart.items[itemIndex].price = price;
      } else {
        cart.items.push({ itemId, quantity, price });
      }
      const savedCart = await cart.save();
      return res.status(201).json(savedCart);
    } else {
      const newCart = new Cart({
        userId,
        items: [{ itemId, quantity, price }],
      });
      await newCart.save();
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json('Something Went Wrong');
    console.log(error);
  }
};

module.exports = {
  addtoCart,
};
