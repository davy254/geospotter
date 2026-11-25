import LocationCard from "./LocationCard";

function LocationList({ locations, onSelectLocation }) {
  if (!locations || locations.length === 0) {
    return <p>No locations found.</p>;
  }

  return (
    <ul className="location-list">
      {locations.map((location) => (
        <li key={location.id}>
          <LocationCard
            name={location.name}
            region={location.region}
            type={location.type}
            lat={location.lat}
            lng={location.lng}
            onViewDetails={() => onSelectLocation(location)}
          />
        </li>
      ))}
    </ul>
  );
}

export default LocationList;