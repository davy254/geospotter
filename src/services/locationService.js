const API_URL = "/api/locations.json";

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error(
      "Response was not JSON. Check the API URL or file path."
    );
  }

  return response.json();
}

export async function fetchLocations() {
  return fetchJson(API_URL);
}

export async function fetchLocationById(id) {
  const locations = await fetchLocations();

  return locations.find(
    (location) => location.id === Number(id)
  );
}