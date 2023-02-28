import axios from 'axios';
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  USER_REGISTER_REQUESTED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from '../types';
import * as type from '../types';

// const apiUrl = 'http://localhost:3001/auth';

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
      yield put({ type: USER_REGISTER_SUCCESS });
    } else {
      yield put({ type: USER_REGISTER_FAILED, message: data.message });
    }
  } catch (error) {
    yield put({ type: USER_REGISTER_FAILED, message: error.message });
  }
}

// function getApi(data) {
//   return fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// }
// function getApi() {
//   return axios
//     .post('http://localhost:3001/auth/')
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// }

// function* registerUser(payload) {
//   try {
//     const response = yield call(getApi, payload.data);
//     yield put({ type: 'USER_REGISTER_SUCCESS' });
//     if (response.data.error) {
//       alert(response.data.error);
//       // yield put(setLogin(false));
//     } else {
//       // yield put(setLogin(true));
//       // yield put(setName(payload.username));
//     }
//   } catch (error) {
//     yield put({ type: 'USER_REGISTER_FAILED', message: error.message });
//   }
//   // try {
//   //   const user = yield call(getApi, action);
//   //   yield put({ type: 'USER_REGISTER_SUCCESS' });
//   // } catch (error) {
//   //   yield put({ type: 'USER_REGISTER_FAILED', message: error.message });
//   // }
// }

function* userSaga() {
  yield takeLatest(type.USER_REGISTER_REQUESTED, registerUser);
}

export default userSaga;
