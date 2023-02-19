import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', action.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

/**
 * 

const curryFunc = (a) => (b, c) => {
  a + b -c
}

const with3 = curryFunc(3)
withA(2, 4)

3 + 2 - 4


 */
