const API_URL = "/api/locations.json";

export async function fetchLocations() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function fetchLocationById(id) {
  const locations = await fetchLocations();

  return locations.find(
    (location) => location.id === Number(id)
  );
}