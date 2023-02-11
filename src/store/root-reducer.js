import { combineReducer } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducer({
  user: userReducer,
});
