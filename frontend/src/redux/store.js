// import { configureStore } from '@reduxjs/toolkit';
// import appReducer from '../redux/features/auth/appState';
// import createSagaMiddleware from '@redux-saga/core';
// import appSaga from '../redux/features/appSaga';

// const saga = createSagaMiddleware();
// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//   },
//   middleware: [saga],
// });
// saga.run(appSaga);

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

// export default store;
