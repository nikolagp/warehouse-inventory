import * as type from '../types';

// Get all products
export function getProducts(products) {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
}

// Add products
export function addProduct(product) {
  return {
    type: type.ADD_PRODUCT_REQUESTED,
    payload: product,
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

// Login user
export function loginUser(username, password) {
  return {
    type: type.USER_LOGIN_REQUESTED,
    payload: { username, password },
  };
}

export function loginStatus(isLoggedIn) {
  return {
    type: type.LOGIN_STATUS_REQUESTED,
    payload: isLoggedIn,
  };
}

export function setLogin(isLoggedIn) {
  return {
    type: type.SET_LOGIN,
    payload: isLoggedIn,
  };
}

export function setName(name) {
  return {
    type: type.SET_NAME,
    payload: name,
  };
}

// export function loginSuccess(data) {
//   return {
//     type: type.USER_LOGIN_SUCCESS,
//     payload: data,
//   };
// }

// export function loginFailed(error) {
//   return {
//     type: type.USER_LOGIN_FAILED,
//     payload: error,
//   };
// }
