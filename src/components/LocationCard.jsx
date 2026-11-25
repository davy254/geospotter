function LocationCard({ name , region, type, lat, long}){
    return (
        <article className="location-card">
            <h3>{name}</h3>
            <p>
                <strong>Region:</strong>{region}
            </p>
            <p>
                <strong>Type:</strong>{type}
            </p>
            <p>
                <strong>Coordinates:</strong>{lat.toFixed(4)},{long.toFixed(4)}
            </p>
        </article>
    );
}

export default LocationCard