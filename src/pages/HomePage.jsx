import { useEffect, useState } from "react";
import LocationList from "../components/LocationList";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import { fetchLocations } from "../services/locationService";

function HomePage() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  async function loadLocations() {
    try {
      setIsLoading(true);
      setError(null);

      const data = await fetchLocations();

      setLocations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadLocations();
  }, []);

  const locationTypes = [
    "All",
    ...new Set(locations.map((location) => location.type)),
  ];

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesType =
      selectedType === "All" || location.type === selectedType;

    return matchesSearch && matchesType;
  });

  if (error) {
    return (
      <>
        <h2>Locations in Kenya</h2>

        <p className="error">Error: {error}</p>

        <button type="button" onClick={loadLocations}>
          Try again
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Locations in Kenya</h2>

      <div className="controls">
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
        />

        <TypeFilter
          types={locationTypes}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        <button
          type="button"
          onClick={loadLocations}
          disabled={isLoading}
        >
          {isLoading ? "Refreshing..." : "Refresh locations"}
        </button>
      </div>

      {isLoading ? (
        <p className="loading">Loading locations...</p>
      ) : (
        <>
          <p>
            Showing {filteredLocations.length} location
            {filteredLocations.length === 1 ? "" : "s"}
          </p>

          <LocationList locations={filteredLocations} />
        </>
      )}
    </>
  );
}

export default HomePage;