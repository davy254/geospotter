import { useState } from "react";
import Header from "./components/Header";
import LocationList from "./components/LocationList";
import LocationDetail from "./components/LocationDetail";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import { locations } from "./data/locations";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  return (
    <div>
      <Header />

      <main>
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
        </div>

        <p>
          Showing {filteredLocations.length} location
          {filteredLocations.length === 1 ? "" : "s"}
        </p>

        {selectedLocation && (
          <LocationDetail
            location={selectedLocation}
            onClear={() => setSelectedLocation(null)}
          />
        )}

        <LocationList
          locations={filteredLocations}
          onSelectLocation={setSelectedLocation}
        />
      </main>
    </div>
  );
}

export default App;