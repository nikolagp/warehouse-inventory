// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   // isLoggedIn: false,
//   isLoading: false,
//   products: [],
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     getProductsFetch(state) {
//       state.isLoading = true;
//     },
//     getProductsSuccess(state, action) {
//       state.products = action.payload;
//       state.isLoading = false;
//     },
//     addProducts(state, action) {
//       state.products = action.payload;
//     },
//     deleteProduct(state, action) {
//       state.products = state.products.filter(
//         (product) => product.id !== action.payload
//       );
//     },
//   },
// });

// export const {
//   getProductsFetch,
//   getProductsSuccess,
//   deleteProduct,
//   registerUsers,
// } = productSlice.actions;

// export const selectIsLoggedIn = (state) => state.product.isLoggedIn;
// // export const selectName = (state) => state.app.name;
// export const selectProduct = (state) => state.product.products;

// export default productSlice.reducer;
