import * as type from '../types';

// Get all products
export function getProducts(products) {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
}

// Get product by ID
// export function getProductById(product) {
//   return {
//     type: type.GET_PRODUCTS_REQUESTED,
//     payload: product.id,
//   };
// }

// Register user
export function registerUser(isLoggedIn) {
  return {
    type: type.USER_REGISTER_REQUESTED,
    payload: isLoggedIn,
  };
}
