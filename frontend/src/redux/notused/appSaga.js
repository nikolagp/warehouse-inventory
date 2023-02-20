import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  call,
  put,
  take,
  delay,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  deleteProduct,
  getProductsSuccess,
  // createUserStart,
  createUserSuccess,
  createUserError,
  setName,
} from './auth/appState';
import { registerUserApi } from '../api';

// Fetching products
function* workGetProductsFetch() {
  const products = yield call(() =>
    axios.get('http://localhost:3001/products')
  );
  yield put(getProductsSuccess(products.data));
}

// Create a user
function* workCreateUserStart({ payload }) {
  try {
    const response = yield call(registerUserApi, payload);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

// Delete product function doesn't work
function* workDeleteProduct(action) {
  const { id } = action.payload;
  const product = yield call(() =>
    axios.delete(`http://localhost:3001/products/${id}`)
  );
  yield put(deleteProduct(product.data));
}

// function* workRegisterUsers(action) {
//   const formData = action.payload;
//   const response = yield call(() =>
//     fetch('http://localhost:3001/auth', {
//       method: 'POST',
//       body: formData,
//     }).then((response) => response.json())
//   );
//   if (response.error) {
//     alert(response.error);
//     // yield call(useNavigate('/'));
//   } else {
//     yield put(registerUsers(response));
//   }
// }

// function* workRegisterUsers(action) {
//   const formData = action.payload;
//   const users = yield call(() =>
//     fetch('http://localhost:3001/auth', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           alert(data.error);
//           useNavigate('/');
//         } else {
//           setName('Kole');
//         }
//       })
//   );
//   const newUser = yield users.data;
//   yield put(registerUsers(newUser));
//   // yield put(setName(users.data.name));
// }

function* appSaga() {
  yield takeEvery('app/getProductsFetch', workGetProductsFetch);
  yield takeLatest('app/createUserStart', workCreateUserStart);
  yield takeLatest('app/deleteProduct', workDeleteProduct);
  // yield takeEvery('app/registerUsers', workRegisterUsers);
}

export default appSaga;
