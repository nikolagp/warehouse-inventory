import axios from 'axios';
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
  loginStatusStart,
  loginStatusSuccess,
  loginStatusError,
  previewProductStart,
  previewProductSuccess,
  previewProductError,
} from './auth/appState';

// Login Status
function* workloginStatusStart() {
  try {
    const response = yield call(() =>
      axios.get('http://localhost:3001/auth/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
    );
    if (response.data.error) {
      yield put(setLogin(false));
    } else {
      yield put(loginStatusSuccess(response.data));
      yield put(setLogin(true));
      yield put(setName(response.data.username));
    }
  } catch (error) {
    yield put(loginStatusError(error.response.data));
  }
}

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

// Preview products
function* workPreviewProductStart(id) {
  try {
    const products = yield call(() =>
      axios.get(`http://localhost:3001/products/byId/${id}`)
    );
    if (products.status === 200) {
      yield put(previewProductSuccess(id));
    }
  } catch (error) {
    yield put(previewProductError(error.products.data));
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
    const response = yield call(() =>
      axios.post('http://localhost:3001/auth/', payload)
    );
    yield put(createUserSuccess(response.data));
    if (response.data.error) {
      alert(response.data.error);
      yield put(setLogin(false));
    } else {
      yield put(setLogin(true));
      yield put(setName(payload.username));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

// Login user
function* workLoginUserStart({ payload }) {
  try {
    const response = yield call(() =>
      axios.post('http://localhost:3001/auth/login/', payload)
    );
    yield put(loginUserSuccess(response.data));
    if (response.data.error) {
      alert(response.data.error);
    } else {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('name', response.data.name);
      yield put(setLogin(true));
    }
  } catch (error) {
    yield put(loginUserError(error.response.data));
  }
}

function* appSaga() {
  yield takeEvery('app/getProductsFetch', workGetProductsFetch);
  yield takeEvery('app/loginStatusStart', workloginStatusStart);
  yield takeLatest('app/createUserStart', workCreateUserStart);
  yield takeLatest('app/addProductStart', workAddProductStart);
  yield takeLatest('app/loginUserStart', workLoginUserStart);
  // yield take('app/deleteProductStart', workDeleteProductStart);
  // yield takeEvery('app/previewProductStart', workPreviewProductStart);
  while (true) {
    const { payload: productID } = yield take('app/deleteProductStart');
    yield call(workDeleteProductStart, productID);
    const { payload: id } = yield take('app/previewProductStart');
    yield call(workPreviewProductStart, id);
  }
}

export default appSaga;
