import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as type from '../types';

const apiUrl = 'http://localhost:3001/products';

// Fetch all products
function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProducts(action) {
  try {
    const products = yield call(getApi);
    yield put({ type: type.GET_PRODUCTS_SUCCESS, products: products });
  } catch (error) {
    yield put({ type: type.GET_PRODUCTS_FAILED, message: error.message });
  }
}

// Add new products

function* addProduct({ payload }) {
  try {
    const products = yield call(() =>
      axios.post('http://localhost:3001/products/', payload)
    );
    if (products.status === 200) {
      yield put({ type: type.ADD_PRODUCT_SUCCESS, product: products.data });
    } else {
      yield put({
        type: type.ADD_PRODUCT_FAILED,
        message: products.data.error,
      });
    }
  } catch (error) {
    yield put({ type: type.ADD_PRODUCT_FAILED, message: error.message });
  }
}

// Delete a product
function* deleteProduct(action) {
  try {
    const { payload } = action;
    const response = yield call(() =>
      axios.delete(`http://localhost:3001/products/${payload}`)
    );
    if (response.status === 200) {
      yield put({ type: type.DELETE_PRODUCTS_SUCCESS, payload });
    }
  } catch (error) {
    yield put({
      type: type.DELETE_PRODUCTS_FAILED,
      message: error.message,
    });
  }
}

// Preview product
function* previewProduct(action) {
  try {
    const { payload } = action;
    const response = yield call(() =>
      axios.get(`http://localhost:3001/products/byId/${payload}`)
    );
    yield put({ type: type.PREVIEW_PRODUCT_SUCCESS, products: response.data });
  } catch (error) {
    yield put({
      type: type.PREVIEW_PRODUCT_FAILED,
      message: error.message,
    });
  }
}

function* productSaga() {
  yield takeEvery(type.GET_PRODUCTS_REQUESTED, fetchProducts);
  yield takeLatest(type.ADD_PRODUCT_REQUESTED, addProduct);
  yield takeLatest(type.DELETE_PRODUCTS_REQUESTED, deleteProduct);
  yield takeEvery(type.PREVIEW_PRODUCT_REQUESTED, previewProduct);
}

export default productSaga;
