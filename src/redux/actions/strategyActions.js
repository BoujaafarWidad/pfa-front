export const NEW_STRATEGY = "NEW_STRATEGY";

export const newStrategy = ({
  id,
  nom,
  strategist,
  desc,
  dateDebut,
  dateFin,
  organization
}) => {
  // search for strategist by name
  return {
    type: NEW_STRATEGY,
    payload: {
      id,
      nom,
      strategist: null,
      desc,
      dateDebut,
      dateFin,
      organization
    }
  };
};
