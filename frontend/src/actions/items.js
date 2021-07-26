import * as api from '../api';
import { FETCH_ALL } from '../constants/actionTypes';

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }

  const action = {
    type: 'FETCH_ALL',
    payload: [],
  };

  return action;
};
