import { createSlice } from '@reduxjs/toolkit';

// const name = JSON.parse(localStorage.getItem('name'));
const accessToken = localStorage.getItem('access_token');

const initialState = {
  isLoggedIn: false,
  name: null,
  accessToken: accessToken ? accessToken : '',
  isLoading: false,
  products: [],
  users: [],
  error: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    // Login Status
    loginStatusStart(state) {
      state.isLoading = true;
    },
    loginStatusSuccess(state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.name = action.payload;
    },
    loginStatusError(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    // Preview Product
    previewProductStart(state, action) {
      state.isLoading = true;
    },
    previewProductSuccess(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    previewProductError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Register user
    createUserStart(state) {
      state.isLoading = true;
    },
    createUserSuccess(state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.users = action.payload;
    },
    createUserError(state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    // Add new product
    addProductStart(state) {
      state.isLoading = true;
    },
    addProductSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },
    addProductError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Login user
    loginUserStart(state) {
      state.isLoading = true;
    },
    loginUserSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    loginUserError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Fetch products
    getProductsFetch(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Delete products
    deleteProductStart(state, action) {
      state.isLoading = true;
      state.products = action.payload;
    },
    deleteProductSuccess(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.isLoading = false;
    },
    deleteProductError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const {
  setLogin,
  setName,
  setToken,
  getProductsFetch,
  getProductsSuccess,
  getProductsError,
  createUserStart,
  createUserSuccess,
  createUserError,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductError,
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  addProductStart,
  addProductSuccess,
  addProductError,
  loginStatusStart,
  loginStatusSuccess,
  loginStatusError,
  previewProductStart,
  previewProductSuccess,
  previewProductError,
} = appSlice.actions;

export const selectIsLoggedIn = (state) => state.app.isLoggedIn;
export const selectName = (state) => state.app.name;
export const selectProduct = (state) => state.app.products;

export default appSlice.reducer;
