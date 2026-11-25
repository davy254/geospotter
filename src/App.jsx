import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import LocationList from "./components/LocationList";
import { locations } from "./data/locations";

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchText.toLowerCase())
  );
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
        </div>

        <LocationList locations={filteredLocations} />
      </main>
    </div>
  );
}

export default App;