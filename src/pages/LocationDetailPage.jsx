import { Link, useParams } from "react-router-dom";
import { useLocations } from "../context/LocationsContext";
import MapView from "../components/MapView";

function LocationDetailPage() {
  const { locationId } = useParams();

  const { locations, isLoading, error, loadLocations } = useLocations();

  if (isLoading) {
    return <p className="loading">Loading location details...</p>;
  }

  if (error) {
    return (
      <section className="location-detail">
        <h3>Error</h3>

        <p className="error">Error: {error}</p>

        <Link className="button-link" to="/">
          Back to locations
        </Link>

        <button type="button" onClick={loadLocations}>
          Try again
        </button>
      </section>
    );
  }

  const location = locations.find(
    (item) => item.id === Number(locationId)
  );

  if (!location) {
    return (
      <section className="location-detail">
        <h3>Location not found</h3>
        <p>The location you are looking for does not exist.</p>

        <Link className="button-link" to="/">
          Back to locations
        </Link>
      </section>
    );
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

      <MapView
        locations={[location]}
        latitude={location.lat}
        longitude={location.lng}
        zoom={10}
      />

      <Link className="button-link" to="/">
        Back to locations
      </Link>
    </section>
  );
}

export default LocationDetailPage;