import { ADDTOCART, PLACEORDER } from '../constants/actionTypes';

const defaultUser = {
  cart: [],
  order: [],
};
const userReducer = (user = defaultUser, action) => {
  switch (action.type) {
    case ADDTOCART:
      user.cart = action.payload;
      return user;
    case PLACEORDER:
      user.order = action.payload;
      user.cart = [];
      return user;
    default:
      return user;
  }
};

export default userReducer;
