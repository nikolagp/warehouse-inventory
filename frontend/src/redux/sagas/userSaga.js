import axios from 'axios';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  loginStatusFailed,
  loginStatusSuccess,
  loginUserFailed,
  loginUserSuccess,
  registerUserFailed,
  registerUserSuccess,
  setLogin,
  setName,
} from '../actions';
import * as type from '../types';

// Register a user
function* registerUser(action) {
  try {
    const apiUrl = 'http://localhost:3001/auth';
    const response = yield call(axios.post, apiUrl, action.payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      yield put(registerUserSuccess(response.data));
    } else {
      yield put(registerUserFailed(response.data.message));
    }
  } catch (error) {
    yield put(registerUserFailed(error.message));
  }
}

// Login a user
function loginApiCall(username, password) {
  return axios.post('http://localhost:3001/auth/login', { username, password });
}

function* loginUser(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(loginApiCall, username, password);
    if (response.status === 200 && response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('name', response.data.name);
      yield put(loginUserSuccess(response.data));
    } else {
      yield put(loginUserFailed(response.data.error));
    }
  } catch (error) {
    yield put(loginUserFailed(error));
  }
}

// Login status
function* loginStatus(action) {
  try {
    const response = yield call(() =>
      axios.get('http://localhost:3001/auth/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
    );
    if (response.data.error) {
      yield put(false);
    } else {
      yield put(loginStatusSuccess(response.data));
      yield put(setLogin(true));
    }
  } catch (error) {
    yield put(loginStatusFailed(error));
  }
}

function* userSaga() {
  yield takeLatest(type.USER_REGISTER_REQUESTED, registerUser);
  yield takeLatest(type.USER_LOGIN_REQUESTED, loginUser);
  yield takeEvery(type.LOGIN_STATUS_REQUESTED, loginStatus);
}

export default userSaga;
