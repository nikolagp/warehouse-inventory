import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux';
// import createSagaMiddleware from '@redux-saga/core';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/features/auth/authSlice';
import productsSaga from './redux/features/productsSaga';

const saga = createSagaMiddleware();
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   middleware: [saga],
// });
// saga.run(productsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
