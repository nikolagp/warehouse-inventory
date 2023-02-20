import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
// import rootSaga from './userSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if (ProcessingInstruction.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

export const store = configureStore({
  reducer: {
    auth: rootReducer,
  },
  middleware: applyMiddleware(...middlewares),
});

// sagaMiddleware.run(rootSaga);
