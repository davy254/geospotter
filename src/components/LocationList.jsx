import LocationCard from "./LocationCard";

function LocationList({ locations }) {
  if (!locations || locations.length === 0) {
    return <p>No locations found.</p>;
  }

  return (
    <ul className="location-list">
      {locations.map((location) => (
        <li key={location.id}>
          <LocationCard
            id={location.id}
            name={location.name}
            region={location.region}
            type={location.type}
            lat={location.lat}
            lng={location.lng}
          />
        </li>
      ))}
    </ul>
  );
}

export default LocationList;