import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const combineReducer = combineReducers({
  // add your reducer here
});
export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
