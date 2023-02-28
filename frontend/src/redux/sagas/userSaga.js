import axios from 'axios';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { setLogin, setName } from '../actions';
// import {
//   USER_REGISTER_REQUESTED,
//   USER_REGISTER_SUCCESS,
//   USER_REGISTER_FAILED,
//   USER_LOGIN_REQUESTED,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_FAILED,
// } from '../types';
// import { loginRequested, loginSuccess, loginFailed, setName } from '../actions';
import * as type from '../types';

// Register a user
function* registerUser(action) {
  try {
    const apiUrl = 'http://localhost:3001/auth';
    const response = yield call(fetch, apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const data = yield response.json();

    if (response.ok) {
      yield put({ type: type.USER_REGISTER_SUCCESS });
    } else {
      yield put({ type: type.USER_REGISTER_FAILED, message: data.message });
    }
  } catch (error) {
    yield put({ type: type.USER_REGISTER_FAILED, message: error.message });
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
    // If login is successful, set the token in local storage and update state
    if (response.status === 200 && response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('name', response.data.name);
      yield put({ type: type.USER_LOGIN_SUCCESS, payload: response.data });
    } else {
      yield put({ type: type.USER_LOGIN_FAILED, payload: response.data.error });
    }
  } catch (error) {
    yield put({ type: type.USER_LOGIN_FAILED, payload: error });
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
      yield put({ type: type.LOGIN_STATUS_SUCCESS, payload: response.data });
      yield put(setName(response.data.username));
      yield put(setLogin(true));
    }
  } catch (error) {
    yield put({
      type: type.LOGIN_STATUS_FAILED,
      payload: error,
    });
  }
}

function* userSaga() {
  yield takeLatest(type.USER_REGISTER_REQUESTED, registerUser);
  yield takeLatest(type.USER_LOGIN_REQUESTED, loginUser);
  yield takeEvery(type.LOGIN_STATUS_REQUESTED, loginStatus);
}

export default userSaga;
