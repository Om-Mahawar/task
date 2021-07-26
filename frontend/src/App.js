import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Cart from './Components/Cart/cart';
import Orders from './Components/Order/order';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/items/:id' component={ItemDetails} />
          <Route path='/mycart' component={Cart} />
          <Route path='/myorders' component={Orders} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
