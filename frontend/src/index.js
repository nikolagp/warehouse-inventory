import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './redux/features/auth/appState';
// import usersReducer from './redux/toolkit-saga/usersSlice';
// import productReducer from './redux/toolkit-saga/productSlice';
import appSaga from './redux/features/appSaga';

// import { store } from './redux-saga/store';

// redux-saga and redux/toolkit //////////////////////////////////
const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    app: appReducer,
    // users: usersReducer,
    // products: productReducer,
  },
  middleware: [saga],
});
saga.run(appSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
