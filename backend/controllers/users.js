const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const Cart = require('../models/cart');

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User Does Not Exist' });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something gone wrong' });
  }
};

const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: 'User already exists' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something gone wrong' });
  }
};

const placeOrder = async (req, res) => {
  const userId = req.userId;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    const cart = await Cart.findOne({ userId });
    console.log(user);
    console.log(cart);
    if (user && cart) {
      cart.items.forEach(({ itemId, quantity, price }) => {
        user.orders.push({ itemId, quantity, price });
      });
      const savedUser = await user.save();
      res.status(200).json(user);
      Cart.deleteOne({ userId });
    } else {
      res.json('Something is wrong');
    }
  } catch (error) {
    console.log(error);
    res.status(400).json('Something went wrong');
  }
};

module.exports = {
  signin,
  signup,
  placeOrder,
};
