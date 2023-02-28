import * as type from '../types';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch all the products
const products = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: true,
        error: action.message,
      };
    default:
      return state;
  }
};

// Fetch product by ID
const productById = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case type.GET_PRODUCT_ID_FAILED:
      return {
        ...state,
        loading: true,
        error: action.message,
      };
    default:
      return state;
  }
};

export { products, productById };
