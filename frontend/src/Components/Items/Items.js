import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item/Item';

import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Items = ({ setCurrentId }) => {
  const items = useSelector((state) => state.items);
  const classes = useStyles();

  useEffect(() => {}, [items]);

  return !items.length ? (
    <CircularProgress />
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
            <Item item={item}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Items;
