import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/Admin.reducer";

const combineReducer = combineReducers({
  // add your reducer here
  admin:adminReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(combineReducer,composeEnhancer(applyMiddleware(thunk)));
