import Header from "./components/Header";
import LocationList from "./components/LocationList";
import { locations } from "./data/locations";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Locations in Kenya</h2>
        <LocationList locations={locations} />
      </main>
    </div>
  );
}

export default App;