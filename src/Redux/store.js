import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as accessoriesReducer} from "./Accessories/reducer";

const combineReducer = combineReducers({
  // add your reducer here
  accessoriesReducer,
});
export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
