import React from 'react';
import { useHistory } from 'react-router';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

const Item = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();

  const seeDetails = () => {
    history.push(`/items/${item._id}`);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h2' color='textSecondary' component='p'>
          {item.name}
        </Typography>
        <Typography variant='h6' color='textSecondary' component='p'>
          {item.price}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={seeDetails}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
