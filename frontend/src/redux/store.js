import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authReducer from '../redux/features/auth/authSlice';
import createSagaMiddleware from 'redux-saga';
import productsSaga from './features/productsSaga';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [saga],
});

saga.run(productsSaga);
