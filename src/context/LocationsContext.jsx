import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { fetchLocations } from "../services/locationService";

const LocationsContext = createContext(null);

export function LocationsProvider({ children }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadLocations = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  function addLocation(locationData) {
    const newLocation = {
      id: Date.now(),
      ...locationData,
    };

    setLocations((prevLocations) => [
      newLocation,
      ...prevLocations,
    ]);
  }

  return (
    <LocationsContext.Provider
      value={{
        locations,
        isLoading,
        error,
        loadLocations,
        addLocation,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
}

export function useLocations() {
  const context = useContext(LocationsContext);

  if (!context) {
    throw new Error(
      "useLocations must be used inside LocationsProvider"
    );
  }

  return context;
}