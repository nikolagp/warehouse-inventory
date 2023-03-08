import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getProductsFailed,
  getProductsSuccess,
  addProductSucess,
  addProductFailed,
  deleteProductsSuccess,
  deleteProductsFailed,
  previewProductSuccess,
  previewProductFailed,
  loginStatusFailed,
} from '../actions';
import * as type from '../types';

// Fetch all products
function* fetchProducts() {
  try {
    const products = yield call(() =>
      axios.get('http://localhost:3001/products', {
        headers: { accessToken: localStorage.getItem('accessToken') },
      })
    );
    yield put(getProductsSuccess(products.data));
  } catch (error) {
    yield put(getProductsFailed(error.message));
  }
}

// Add new products
function* addProduct({ payload }) {
  try {
    const products = yield call(() =>
      axios.post('http://localhost:3001/products/', payload, {
        headers: { accessToken: localStorage.getItem('accessToken') },
      })
    );
    if (products.status === 200) {
      yield put(addProductSucess(products.data));
    } else {
      yield put(addProductFailed(products.data.error));
    }
  } catch (error) {
    yield put(addProductFailed(error.message));
  }
}

// Delete a product
function* deleteProduct(action) {
  try {
    const { payload } = action;
    const response = yield call(() =>
      axios.delete(`http://localhost:3001/products/${payload}`, {
        headers: { accessToken: localStorage.getItem('accessToken') },
      })
    );
    if (response.status === 200) {
      yield put(deleteProductsSuccess(payload));
    }
  } catch (error) {
    yield put(deleteProductsFailed(error.message));
  }
}

// Preview product
function* previewProduct(action) {
  try {
    const { payload } = action;
    const response = yield call(() =>
      axios.get(`http://localhost:3001/products/byId/${payload}`, {
        headers: { accessToken: localStorage.getItem('accessToken') },
      })
    );
    yield put(previewProductSuccess(response.data));
  } catch (error) {
    yield put(previewProductFailed(error.message));
  }
}

function* productSaga() {
  yield takeEvery(type.GET_PRODUCTS_REQUESTED, fetchProducts);
  yield takeEvery(type.PREVIEW_PRODUCT_REQUESTED, previewProduct);
  yield takeLatest(type.ADD_PRODUCT_REQUESTED, addProduct);
  yield takeLatest(type.DELETE_PRODUCTS_REQUESTED, deleteProduct);
}

export default productSaga;
