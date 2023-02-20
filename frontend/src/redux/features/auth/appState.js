import { createSlice } from '@reduxjs/toolkit';

const name = JSON.parse(localStorage.getItem('name'));
const accessToken = localStorage.getItem('access_token');

const initialState = {
  isLoggedIn: false,
  name: name ? name : '',
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
      // localStorage.setItem('name', JSON.stringify(action.payload));
      state.name = action.payload;
    },
    // Register user
    createUserStart(state) {
      state.isLoading = true;
    },
    createUserSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    createUserError(state, action) {
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
    // deleteProduct(state, action) {
    //   state.products = state.products.filter(
    //     (product) => product.id !== action.payload
    //   );
    // },
    // registerUsers(state, action) {
    //   state.users = action.payload;
    // },
  },
});

export const {
  setLogin,
  setName,
  getProductsFetch,
  getProductsSuccess,
  getProductsError,
  deleteProduct,
  registerUsers,
  createUserStart,
  createUserSuccess,
  createUserError,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductError,
  loginUserStart,
  loginUserSuccess,
  loginUserError,
} = appSlice.actions;

export const selectIsLoggedIn = (state) => state.app.isLoggedIn;
export const selectName = (state) => state.app.name;
export const selectProduct = (state) => state.app.products;

export default appSlice.reducer;
