import { combineReducers } from 'redux';
import { products } from './products';
import { registerUser } from './users';

const rootReducer = combineReducers({
  products: products,
  // productById: productById,
  registerUser: registerUser,
});

export default rootReducer;
