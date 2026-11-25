import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchLocationById } from "../services/locationService";
import MapView from "../components/MapView";

function LocationDetailPage() {
  const { locationId } = useParams();

  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function loadLocation() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchLocationById(locationId);

        if (isActive) {
          setLocation(data);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadLocation();

    return () => {
      isActive = false;
    };
  }, [locationId]);

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
      </section>
    );
  }

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
      <h3>{location.name} {location.type} Details</h3>

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