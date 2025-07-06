const BASE_URL = "https://d3660g9kardf5b.cloudfront.net/api/equipment";

export const getEquipApi = async () => {
  const res = await fetch(BASE_URL);

  const data = await res.json();

  return data;
};
