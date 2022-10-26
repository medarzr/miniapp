import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import saga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middleware: any[] = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware];

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });
  middleware.push(logger);
}

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(saga);

export default store;
