import { createSlice } from '@reduxjs/toolkit';

const name = JSON.parse(localStorage.getItem('name'));

const initialState = {
  isLoggedIn: false,
  name: name ? name : '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem('name', JSON.stringify(action.payload));
      state.name = action.payload;
    },
<<<<<<< HEAD
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
  SET_LOGIN,
  SET_NAME,
  getProductsFetch,
  getProductsSuccess,
  deleteProduct,
  registerUsers,
} = authSlice.actions;
=======
  },
});

export const { SET_LOGIN, SET_NAME } = authSlice.actions;
>>>>>>> parent of 1606f48 (installed redux-saga and fetched products)

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;

export default authSlice.reducer;
