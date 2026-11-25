function LocationCard({ name, region, type, lat, lng, onViewDetails }) {
  return (
    <article className="location-card">
      <h3>{name}</h3>

      <p>
        <strong>Region:</strong> {region}
      </p>

      <p>
        <strong>Type:</strong> {type}
      </p>

      <p>
        <strong>Coordinates:</strong> {lat.toFixed(4)}, {lng.toFixed(4)}
      </p>

      <button type="button" onClick={onViewDetails}>
        View details
      </button>
    </article>
  );
}

export default LocationCard;