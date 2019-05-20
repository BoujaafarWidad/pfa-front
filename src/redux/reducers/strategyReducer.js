import { NEW_STRATEGY, FETCH_ALL_STRATEGIES } from "../actions/strategyActions";

const defaultState = [];

const strategyReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case NEW_STRATEGY:
      return [...oldState, action.payload];
    case FETCH_ALL_STRATEGIES:
      return [...oldState, ...action.payload];
    default:
      return oldState;
  }
};

export default strategyReducer;
