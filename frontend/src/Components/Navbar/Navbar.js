import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import decode from 'jwt-decode';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    ///JWT
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/auth');
    setUser(null);
  };

  const myOrders = () => {
    history.push('/myorders');
  };
  const myCart = () => {
    history.push('/mycart');
  };

  return (
    <AppBar position='static' color='inherit' className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography variant='h3' align='center' className={classes.heading}>
          E-Commerce
        </Typography>
        <Button
          align='center'
          color='textSecondary'
          className={classes.options}
          onClick={myOrders}
        >
          My Orders
        </Button>
        <Button
          align='center'
          color='textSecondary'
          className={classes.options}
          onClick={myCart}
        >
          My Cart
        </Button>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageurl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
