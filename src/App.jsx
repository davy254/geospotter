import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LocationDetailPage from "./pages/LocationDetailPage";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/location/:locationId"
            element={<LocationDetailPage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;