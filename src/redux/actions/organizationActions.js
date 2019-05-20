export const NEW_ORGANIZATION = "NEW_ORGANIZATION";

export const newOrganization = ({ nom, desc, adr, tel, owner }) => {
  return {
    type: NEW_ORGANIZATION,
    payload: {
      nom,
      desc,
      adr,
      tel,
      owner
    }
  };
};
