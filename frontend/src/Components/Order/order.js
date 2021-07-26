import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import CartItem from '../Cart/CartItem/CartItem';
import useStyles from './styles';

const Order = () => {
  const items = useSelector((state) => state.user.order);
  const classes = useStyles();

  return !items.length ? (
    <Typography color='textSecondary' variant='h2'>
      No Orders yet
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {items.map((item) => {
        return (
          <Grid key={item._id} item xs={12} sm={6}>
            <CartItem cartItem={item} quantity={true} number={item.quantity} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Order;
