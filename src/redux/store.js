import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import messageReducer from "./reducers/messageReducer";
import authReducer from "./reducers/authReducer";
import counterReducer from "./counter/counterSlice";
import themeReducer from "./theme/themeSlice";
import todoReducer from "./todos/todoSlice";
import loginReducer from "./login/loginSlice";
import logger from "./middleware/logger";

const rootReducer = combineReducers({
  count: countReducer,
  auth: authReducer,
  message: messageReducer,

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
