import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  call,
  put,
  take,
  delay,
  all,
  fork,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  setToken,
  getProductsFetch,
  getProductsSuccess,
  getProductsError,
  createUserStart,
  createUserSuccess,
  createUserError,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductError,
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  setLogin,
  setName,
  addProductStart,
  addProductSuccess,
  addProductError,
} from './auth/appState';
// import { registerUserApi, loadProductsApi } from '../api';

// Fetch products

function* workGetProductsFetch() {
  try {
    const products = yield call(() =>
      axios.get('http://localhost:3001/products')
    );
    if (products.status === 200) {
      yield delay(500);
      yield put(getProductsSuccess(products.data));
    }
  } catch (error) {
    yield put(getProductsError(error.products.data));
  }
}

// Delete products

function* workDeleteProductStart(productID) {
  try {
    const products = yield call(() =>
      axios.delete(`http://localhost:3001/products/${productID}`)
    );
    if (products.status === 200) {
      yield put(deleteProductSuccess(productID));
    }
  } catch (error) {
    yield put(deleteProductError(error.products.data));
  }
}

// Add Product

function* workAddProductStart({ payload }) {
  try {
    const products = yield call(() =>
      axios.post('http://localhost:3001/products/', payload)
    );
    if (products.status === 200) {
      yield put(addProductSuccess(products.data));
    }
  } catch (error) {
    yield put(addProductError(error.products.data));
  }
}

// Register user

function* workCreateUserStart({ payload }) {
  try {
    const products = yield call(() =>
      axios.post('http://localhost:3001/auth/', payload)
    );
    if (products.status === 200) {
      yield put(createUserSuccess(products.data));
    }
  } catch (error) {
    yield put(createUserError(error.products.data));
  }
}

// Login user
function* workLoginUserStart({ data }) {
  try {
    const response = yield call(() =>
      axios.post('http://localhost:3001/auth/login/', data)
    );
    if (response.status === 200) {
      yield put(loginUserSuccess(response.data));
      // yield put(setLogin(true));
      // yield put(setToken(response.data.accessToken));
    }
  } catch (error) {
    yield put(loginUserError(error.response.data));
  }
}

function* appSaga() {
  yield takeEvery('app/getProductsFetch', workGetProductsFetch);
  yield takeLatest('app/createUserStart', workCreateUserStart);
  yield takeLatest('app/addProductStart', workAddProductStart);
  yield takeLatest('app/loginUserStart', workLoginUserStart);
  // yield take('app/deleteProductStart', workDeleteProductStart);
  while (true) {
    const { payload: productID } = yield take('app/deleteProductStart');
    yield call(workDeleteProductStart, productID);
  }
}

export default appSaga;
