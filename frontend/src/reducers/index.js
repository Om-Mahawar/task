import { combineReducers } from 'redux';
import itemReducer from './items';
import authReducer from './auth';
import userReducer from './user';

export default combineReducers({
  items: itemReducer,
  user: userReducer,
  auth: authReducer,
});
