// src/LocationCard.jsx

// 1. We define a function that returns JSX (HTML-like code)
function LocationCard() {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>Mount Rainier</h2>
      <p><strong>Coordinates:</strong> 46.8523° N, 121.7603° W</p>
      <p><strong>Terrain:</strong> Volcanic Mountain</p>
    </div>
  );
}

// 2. We export it so other files can use it
export default LocationCard;