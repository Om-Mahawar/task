import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Items from '../Items/Items';
import { getItems } from '../../actions/items';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, currentId]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item>
            <Items setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
