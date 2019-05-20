import { NEW_STRATEGY } from "../actions/strategyActions";

const defaultState = [];

const strategyReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case NEW_STRATEGY:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default strategyReducer;
