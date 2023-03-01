import { combineReducers } from 'redux';
import { products } from './products';
import { authUser } from './users';

const rootReducer = combineReducers({
  products: products,
  user: authUser,
});

export default rootReducer;
