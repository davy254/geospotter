function LocationDetail({ location, onClear }) {
  if (!location) {
    return null;
  }

  return (
    <section className="location-detail">
      <h3>{location.name} Details</h3>

      <p>
        <strong>Region:</strong> {location.region}
      </p>

      <p>
        <strong>Type:</strong> {location.type}
      </p>

      <p>
        <strong>Latitude:</strong> {location.lat.toFixed(6)}
      </p>

      <p>
        <strong>Longitude:</strong> {location.lng.toFixed(6)}
      </p>

      <p>
        <strong>GeoJSON order:</strong> [{location.lng.toFixed(6)}, {location.lat.toFixed(6)}]
      </p>

      <div className="map-placeholder">
        Map will be displayed here in a later module.
      </div>

      <button type="button" onClick={onClear}>
        Clear selection
      </button>
    </section>
  );
}

export default LocationDetail;