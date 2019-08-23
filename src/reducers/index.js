import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user';
import notificationReducer from './notification';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  notification: notificationReducer,
});