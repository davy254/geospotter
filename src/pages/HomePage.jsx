import { useState } from "react";
import LocationList from "../components/LocationList";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import { locations } from "../data/locations";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");

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
      </div>

      <p>
        Showing {filteredLocations.length} location
        {filteredLocations.length === 1 ? "" : "s"}
      </p>

      <LocationList locations={filteredLocations} />
    </>
  );
}

export default HomePage;