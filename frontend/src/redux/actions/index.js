import * as type from '../types';

// Get all products
export function getProducts(products) {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
}
// Delete a product
export function deleteProducts(productId) {
  return {
    type: type.DELETE_PRODUCTS_REQUESTED,
    payload: productId,
  };
}
// Add products
export function addProduct(product) {
  return {
    type: type.ADD_PRODUCT_REQUESTED,
    payload: product,
  };
}
// Preview a product
export function previewProduct(productId) {
  return {
    type: type.PREVIEW_PRODUCT_REQUESTED,
    payload: productId,
  };
}

////////////////////////////////////////////////////////////////////////
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
// Login status
export function loginStatus(isLoggedIn) {
  return {
    type: type.LOGIN_STATUS_REQUESTED,
    payload: isLoggedIn,
  };
}
// Set Login status
export function setLogin(isLoggedIn) {
  return {
    type: type.SET_LOGIN,
    payload: isLoggedIn,
  };
}
// Set Name
export function setName(name) {
  return {
    type: type.SET_NAME,
    payload: name,
  };
}
