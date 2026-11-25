import { Link, useParams } from "react-router-dom";
import { locations } from "../data/locations";

function LocationDetailPage() {
  const { locationId } = useParams();

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

      <div className="map-placeholder">
        Map will be displayed here in a later module.
      </div>

      <Link className="button-link" to="/">
        Back to locations
      </Link>
    </section>
  );
}

export default LocationDetailPage;