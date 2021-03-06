import {
  FETCH_ALL_ORGANIZATIONS,
  NEW_ORGANIZATION,
  UPDATE_ORGANIZATION
} from "../actions/organizationActions";

const defaultState = [];

const organizationReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_ORGANIZATIONS:
      return [...oldState, ...action.payload];
    case NEW_ORGANIZATION:
      return [...oldState, action.payload];
    case UPDATE_ORGANIZATION:
      return oldState.map(organization =>
        organization.id === action.payload.id
          ? { ...action.payload }
          : organization
      );
    default:
      return oldState;
  }
};

export default organizationReducer;
