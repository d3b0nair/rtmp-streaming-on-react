import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authRedcuer from "./authReducer";
import streamReducer from "./streamReducer";
export default combineReducers({
  auth: authRedcuer,
  form: formReducer,
  streams: streamReducer,
});
