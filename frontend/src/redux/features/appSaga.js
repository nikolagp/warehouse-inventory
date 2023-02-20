import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  deleteProduct,
  getProductsSuccess,
  registerUsers,
  setName,
} from './auth/appState';

function* workGetProductsFetch() {
  const products = yield call(() =>
    axios.get('http://localhost:3001/products')
  );
  yield put(getProductsSuccess(products.data));
}

// Delete product function doesn't work
function* workDeleteProduct(id) {
  const product = yield call(() =>
    axios.delete(`http://localhost:3001/products/${id}`)
  );
  yield put(deleteProduct(product));
}

function* workRegisterUsers(action) {
  const formData = action.payload;
  const response = yield call(() =>
    fetch('http://localhost:3001/auth', {
      method: 'POST',
      body: formData,
    }).then((response) => response.json())
  );
  if (response.error) {
    alert(response.error);
    // yield call(useNavigate('/'));
  } else {
    yield put(registerUsers(response));
  }
}

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
  yield takeEvery('app/deleteProduct', workDeleteProduct);
  yield takeEvery('auth/registerUsers', workRegisterUsers);
}

export default appSaga;
