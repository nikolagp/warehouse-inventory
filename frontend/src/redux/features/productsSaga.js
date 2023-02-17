import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess, deleteProductSuccess } from './auth/authSlice';
import axios from 'axios';

function* workGetProductsFetch() {
  const accessToken = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const products = yield call(() =>
    axios.get('http://localhost:3001/products', config)
  );
  const formattedProducts = yield products.data;
  yield put(getProductsSuccess(formattedProducts));
}

function* workDeleteProduct(action) {
  const productId = action.payload;
  yield call(() =>
    fetch(`http://localhost:3001/products/${productId}`, {
      method: 'DELETE',
    })
  );
  yield put(deleteProductSuccess(productId));
}

// function* workDeleteProduct({ payload: id }) {
//   yield call(() =>
//     fetch(`http://localhost:3001/products/${id}`, {
//       method: 'DELETE',
//       // 'headers: { 'Content-Type': 'application/json' },
//     })
//   );
//   yield put(deleteProductSuccess(id));
// }

function* productsSaga() {
  yield takeEvery('auth/getProductsFetch', workGetProductsFetch);
  yield takeEvery('auth/deleteProduct', workDeleteProduct);
}

export default productsSaga;
