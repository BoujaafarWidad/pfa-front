export const NEW_STRATEGY = "NEW_STRATEGY";
export const FETCH_ALL_STRATEGIES = "FETCH_ALL_STRATEGIES";
export const UPDATE_STRATEGY = "UPDATE_STRATEGY";

export const newStrategy = strategy => {
  return {
    type: NEW_STRATEGY,
    payload: strategy
  };
};

export const updateStrategy = strategy => {
  return {
    type: UPDATE_STRATEGY,
    payload: strategy
  };
};

export const fetchAllStrategies = strategies => {
  return {
    type: FETCH_ALL_STRATEGIES,
    payload: strategies
  };
};
