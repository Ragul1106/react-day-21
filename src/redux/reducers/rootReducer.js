import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import {authReducer} from "./authReducer";
import {messageReducer} from "./messageReducer";

const rootReducer = combineReducers({
  count: countReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
