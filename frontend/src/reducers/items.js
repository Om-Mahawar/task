import { FETCH_ALL } from '../constants/actionTypes';

const itemReducer = (items = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return items;
  }
};

export default itemReducer;
