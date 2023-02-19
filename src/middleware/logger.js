export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', action.getState());

  next(action);

  console.log('next state: ', store.getState());
};

/**
 * 

const curryFunc = (a) => (b, c) => {
  a + b -c
}

const with3 = curryFunc(3)
withA(2, 4)

3 + 2 - 4


 */
