import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addToCart } from '../../actions/user';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import useStyles from './styles';

const ItemDetails = () => {
  const { id } = useParams();
  const item = useSelector((state) => {
    let currItem;
    state.items.forEach((item) => {
      if (item._id === id) {
        currItem = item;
      }
    });
    return currItem;
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(addToCart(item._id, 1, item.price));
  };

  return (
    <div>
      <center>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='h3' color='textSecondary' component='p'>
              Name : {item.name}
            </Typography>
            <Typography variant='h6' color='textSecondary' component='p'>
              Price : ${item.price}
            </Typography>
            <Typography variant='h5' color='textSecondary' component='p'>
              Details: {item.details}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size='large' color='primary' onClick={AddToCart}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </center>
    </div>
  );
};

export default ItemDetails;
