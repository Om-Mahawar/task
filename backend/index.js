const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart.js');

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
// app.use(cors(corsOption));
app.use(cors());

app.use('/items', itemRoutes);
app.use('/users', userRoutes);
app.use('/users/cart', cartRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set('useFindAndModify', false);
