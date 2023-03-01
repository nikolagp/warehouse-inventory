import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/index.js';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(rootSaga);
