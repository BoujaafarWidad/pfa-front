export const NEW_ORGANIZATION = "NEW_ORGANIZATION";
export const UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";

export const newOrganization = ({ id, nom, desc, adr, tel, owner }) => {
  return {
    type: NEW_ORGANIZATION,
    payload: {
      id,
      nom,
      desc,
      adr,
      tel,
      owner
    }
  };
};

export const updateOrganization = ({ id, nom, desc, adr, tel, owner }) => {
  return {
    type: UPDATE_ORGANIZATION,
    payload: {
      id,
      nom,
      desc,
      adr,
      tel,
      owner
    }
  };
};
