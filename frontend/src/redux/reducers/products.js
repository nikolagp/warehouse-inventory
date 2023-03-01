import * as type from '../types';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    // Fetch all products
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
    // Add products
    case type.ADD_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [action.product],
      };
    case type.ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: true,
        error: action.message,
      };
    // Delete products
    case type.DELETE_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        loading: false,
      };
    case type.DELETE_PRODUCTS_FAILED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    // Preview products
    case type.PREVIEW_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.PREVIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case type.PREVIEW_PRODUCT_FAILED:
      return {
        ...state,
        loading: true,
        error: action.message,
      };
    default:
      return state;
  }
};

export { products };
