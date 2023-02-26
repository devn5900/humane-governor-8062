import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/Admin.reducer";

import { reducer as accessoriesReducer } from "./Accessories/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
const combineReducer = combineReducers({
  // add your reducer here
  accessories: accessoriesReducer,
  admin: adminReducer,
  auth: AuthReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  combineReducer,
  composeEnhancer(applyMiddleware(thunk))
);
