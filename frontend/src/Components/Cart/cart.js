import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, Typography, Button } from '@material-ui/core';

import { placeOrder } from '../../actions/user';
import useStyles from './CartItem/styles';
import CartItem from './CartItem/CartItem.js';

const Cart = () => {
  const items = useSelector((state) => state.user.cart);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const orderNow = () => {
    dispatch(placeOrder());
    history.push('/myorders');
  };

  return !items.length ? (
    <Typography color='textSecondary' variant='h2'>
      No Items In Cart
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {items.map((item) => (
        <Grid key={item._id} item xs={12} sm={6}>
          <CartItem cartItem={item} quantity={false} />
        </Grid>
      ))}
      <Button color='primary' onClick={orderNow}>
        Order Now
      </Button>
    </Grid>
  );
};

export default Cart;
