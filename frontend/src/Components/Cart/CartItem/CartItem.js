import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, Typography, TextField } from '@material-ui/core';

import { addToCart } from '../../../actions/user';
import useStyles from './styles';

const CartItem = ({ cartItem, quantity, number }) => {
  const currItem = useSelector((state) => {
    let currItem;
    state.items.forEach((item) => {
      if (item._id === cartItem.itemId) {
        currItem = item;
      }
    });
    return currItem;
  });
  const [price, setPrice] = useState(cartItem.price);
  const dispatch = useDispatch();
  const classes = useStyles();

  const quantityChange = (e) => {
    setPrice(e.target.value * cartItem.price);
    dispatch(addToCart(cartItem.itemId, e.target.value, price));
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant='h4' color='textSecondary' component='p'>
          Name : {currItem.name}
        </Typography>
        <Typography variant='h6' color='textSecondary' component='p'>
          Price : ${price}
        </Typography>
        <Typography variant='h5' color='textSecondary' component='p'>
          Quantity:
          {quantity ? (
            number
          ) : (
            <TextField variant='outlined' onChange={quantityChange} />
          )}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CartItem;
