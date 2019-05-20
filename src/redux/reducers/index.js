import { combineReducers } from "redux";
import userReducer from "./userReducer";
import organizationReducer from "./organizationReducer";
import strategyReducer from "./strategyReducer";

const rootReducer = combineReducers({
  user: userReducer,
  organizations: organizationReducer,
  strategies: strategyReducer
});

export default rootReducer;
