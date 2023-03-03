import * as type from '../types';

// Get all products
export const getProducts = (products) => {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: type.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFailed = (message) => {
  return {
    type: type.GET_PRODUCTS_FAILED,
    payload: message,
  };
};

// Add products
export const addProduct = (product) => {
  return {
    type: type.ADD_PRODUCT_REQUESTED,
    payload: product,
  };
};
export const addProductSucess = (product) => {
  return {
    type: type.ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const addProductFailed = (message) => {
  return {
    type: type.ADD_PRODUCT_FAILED,
    payload: message,
  };
};

// Delete a product
export const deleteProducts = (productId) => {
  return {
    type: type.DELETE_PRODUCTS_REQUESTED,
    payload: productId,
  };
};

export const deleteProductsSuccess = (productId) => {
  return {
    type: type.DELETE_PRODUCTS_SUCCESS,
    payload: productId,
  };
};
export const deleteProductsFailed = (message) => {
  return {
    type: type.DELETE_PRODUCTS_FAILED,
    payload: message,
  };
};

// Preview a product
export const previewProduct = (productId) => {
  return {
    type: type.PREVIEW_PRODUCT_REQUESTED,
    payload: productId,
  };
};
export const previewProductSuccess = (productId) => {
  return {
    type: type.PREVIEW_PRODUCT_SUCCESS,
    payload: productId,
  };
};
export const previewProductFailed = (message) => {
  return {
    type: type.PREVIEW_PRODUCT_FAILED,
    payload: message,
  };
};

////////////////////////////////////////////////////////////////////////
// Register user
export const registerUser = (data) => {
  return {
    type: type.USER_REGISTER_REQUESTED,
    payload: data,
  };
};
export const registerUserSuccess = (data) => {
  return {
    type: type.USER_REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerUserFailed = (message) => {
  return {
    type: type.USER_REGISTER_FAILED,
    payload: message,
  };
};
// Login user
export const loginUser = (username, password) => {
  return {
    type: type.USER_LOGIN_REQUESTED,
    payload: { username, password },
  };
};
export const loginUserSuccess = (data) => {
  return {
    type: type.USER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginUserFailed = (message) => {
  return {
    type: type.USER_LOGIN_FAILED,
    payload: message,
  };
};
// Login status
export const loginStatus = (data) => {
  return {
    type: type.LOGIN_STATUS_REQUESTED,
    payload: data,
  };
};
export const loginStatusSuccess = (data) => {
  return {
    type: type.LOGIN_STATUS_SUCCESS,
    payload: data,
  };
};
export const loginStatusFailed = (message) => {
  return {
    type: type.LOGIN_STATUS_FAILED,
    payload: message,
  };
};
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
