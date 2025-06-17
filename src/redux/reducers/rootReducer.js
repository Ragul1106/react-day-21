import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;


