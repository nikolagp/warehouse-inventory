import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/features/auth/appState';
import createSagaMiddleware from '@redux-saga/core';
import appSaga from '../redux/features/appSaga';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [saga],
});
saga.run(appSaga);
