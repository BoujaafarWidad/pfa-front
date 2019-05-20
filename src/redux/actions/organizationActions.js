export const NEW_ORGANIZATION = "NEW_ORGANIZATION";
export const UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";
export const FETCH_ALL_ORGANIZATIONS = "FETCH_ALL_ORGANIZATIONS";

export const fetchAllOrganizations = organizations => {
  return {
    type: FETCH_ALL_ORGANIZATIONS,
    payload: organizations
  };
};

export const newOrganization = organization => {
  return {
    type: NEW_ORGANIZATION,
    payload: organization
  };
};

export const updateOrganization = organization => {
  return {
    type: UPDATE_ORGANIZATION,
    payload: organization
  };
};
