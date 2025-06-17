import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from '../redux/reducers/counterReducer';
import counterReducer from './counter/counterSlice';
import themeReducer from './theme/themeSlice';
import todoReducer from './todos/todoSlice';
import loginReducer from './login/loginSlice';
import logger from './middleware/logger'; 

const rootReducer = combineReducers({
  count: countReducer,
  counter: counterReducer,
  theme: themeReducer,
  todo: todoReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
