import { Link } from "react-router-dom";

function LocationCard({ id, name, region, type, lat, lng }) {
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

      <Link className="button-link" to={`/location/${id}`}>
        View details
      </Link>
    </article>
  );
}

export default LocationCard;