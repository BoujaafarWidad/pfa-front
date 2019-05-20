import { NEW_ORGANIZATION } from "../actions/organizationActions";

const defaultState = [];

const organizationReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case NEW_ORGANIZATION:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default organizationReducer;
