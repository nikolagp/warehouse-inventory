import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess, addProducts } from './auth/authSlice';

function* workGetProductsFetch() {
  const products = yield call(() => fetch('http://localhost:3001/products'));
  const formattedProducts = yield products.json();
  yield put(getProductsSuccess(formattedProducts));
}

function* workAddProducts(action) {
  const formData = action.payload;
  const products = yield call(() =>
    axios.post('http://localhost:3001/products', formData)
  );
  yield put(addProducts(products));
}

function* productsSaga() {
  yield takeEvery('auth/getProductsFetch', workGetProductsFetch);
  yield takeEvery('auth/addProducts', workAddProducts);
}

export default productsSaga;

// import { call, put, takeEvery } from 'redux-saga/effects';
// import {
//   getProductsSuccess,
//   deleteProduct,
//   registerUsers,
//   loginUsers,
// } from './auth/authSlice';
// import axios from 'axios';

// function* workGetProductsFetch() {
//   const accessToken = localStorage.getItem('accessToken');
//   const config = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };
//   const products = yield call(() =>
//     axios.get('http://localhost:3001/products', config)
//   );
//   const formattedProducts = yield products.data;
//   yield put(getProductsSuccess(formattedProducts));
// }

// function* workDeleteProduct(action) {
//   const productId = action.payload;
//   yield call(() =>
//     fetch(`http://localhost:3001/products/${productId}`, {
//       method: 'DELETE',
//     })
//   );
//   yield put(deleteProduct(productId));
// }

// function* workRegisterUsers(action) {
//   const formData = action.payload;
//   const users = yield call(() =>
//     axios.post('http://localhost:3001/auth', formData)
//   );
//   const newUser = yield users.data;
//   yield put(registerUsers(newUser));
// }

// function* workLoginUsers(action) {
//   const formData = action.payload;
//   const { username, password } = formData;
//   const data = { username: username, password: password };
//   const response = yield axios.post('http://localhost:3001/auth/login', data);
//   localStorage.setItem('accessToken', response.data.accessToken);
//   const logUser = response.data;
//   yield put(loginUsers(logUser));
// }

// // function* workDeleteProduct({ payload: id }) {
// //   yield call(() =>
// //     fetch(`http://localhost:3001/products/${id}`, {
// //       method: 'DELETE',
// //       // 'headers: { 'Content-Type': 'application/json' },
// //     })
// //   );
// //   yield put(deleteProductSuccess(id));
// // }

// function* productsSaga() {
//   yield takeEvery('auth/getProductsFetch', workGetProductsFetch);
//   yield takeEvery('auth/deleteProduct', workDeleteProduct);
//   yield takeEvery('auth/registerUsers', workRegisterUsers);
//   yield takeEvery('auth/registerUsers', workLoginUsers);
// }

// export default productsSaga;
