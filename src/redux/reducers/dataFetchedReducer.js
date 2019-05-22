import { DATA_FETCHED } from "../actions/dataFetchedActions";

const defaultState = false;

const dataFetchedReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case DATA_FETCHED:
      return true;
    default:
      return oldState;
  }
};

export default dataFetchedReducer;
