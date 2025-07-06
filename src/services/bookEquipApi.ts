const BASE_URL = "https://d3660g9kardf5b.cloudfront.net/api/equipment/";

export const bookEquipApi = async (equipId: number, duration: number) => {
  const res = await fetch(`${BASE_URL}${equipId}/book`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({ duration }),
  });

  const data = await res.text();

  return data;
};
