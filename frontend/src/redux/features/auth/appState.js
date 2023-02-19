import { createSlice } from '@reduxjs/toolkit';

const name = JSON.parse(localStorage.getItem('name'));

const initialState = {
  isLoggedIn: false,
  name: name ? name : '',
  isLoading: false,
  products: [],
  users: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setName(state, action) {
      localStorage.setItem('name', JSON.stringify(action.payload));
      state.name = action.payload;
    },
    getProductsFetch(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    addProducts(state, action) {
      state.products = action.payload;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    registerUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const {
  setLogin,
  setName,
  getProductsFetch,
  getProductsSuccess,
  deleteProduct,
  registerUsers,
} = appSlice.actions;

export const selectIsLoggedIn = (state) => state.app.isLoggedIn;
export const selectName = (state) => state.app.name;
export const selectProduct = (state) => state.app.products;

export default appSlice.reducer;
