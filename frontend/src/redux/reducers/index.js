import { combineReducers } from 'redux';
import { products } from './products';
import { authUser, loginUser } from './users';

const rootReducer = combineReducers({
  products: products,
  // productById: productById,
  user: authUser,
  // loginUser: loginUser,
});

export default rootReducer;
