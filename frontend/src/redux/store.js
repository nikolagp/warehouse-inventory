import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/features/auth/authSlice';
// import createSagaMiddleware from '@redux-saga/core';
import appSaga from './redux/features/appSaga';
import usersSlice from './toolkit-saga/usersSlice';
import productSlice from './toolkit-saga/productSlice';

// const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    app: appReducer,
    // product: productSlice,
  },
  // middleware: [saga],
});

// saga.run(appSaga);
