import * as api from '../api';
import { ADDTOCART, PLACEORDER } from '../constants/actionTypes.js';

export const addToCart = (itemId, quantity, price) => async (dispatch) => {
  try {
    const cartItem = {
      itemId,
      quantity,
      price,
    };
    const { data } = await api.addToCart(cartItem);
    console.log(data.items);
    dispatch({ type: ADDTOCART, payload: data.items });
  } catch (error) {
    console.log(error);
  }
};

export const placeOrder = () => async (dispatch) => {
  try {
    const { data } = await api.placeOrder();
    console.log(data);
    dispatch({ type: PLACEORDER, payload: data.orders });
  } catch (error) {
    console.log(error);
  }
};
