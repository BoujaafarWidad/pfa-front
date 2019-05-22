import { combineReducers } from "redux";
import userReducer from "./userReducer";
import organizationReducer from "./organizationReducer";
import strategyReducer from "./strategyReducer";
import dataFetchedReducer from "./dataFetchedReducer";

const rootReducer = combineReducers({
  dataFetched: dataFetchedReducer,
  user: userReducer,
  organizations: organizationReducer,
  strategies: strategyReducer
});

export default rootReducer;
