import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './redux/features/auth/appState';
import appSaga from './redux/features/appSaga';

// import { store } from './redux/store';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    app: appReducer,
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
