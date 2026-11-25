import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapView({ locations = [], latitude, longitude, zoom = 6 }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersLayerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) {
      return;
    }

    const map = L.map(mapContainerRef.current).setView(
      [latitude, longitude],
      zoom
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);

    mapRef.current = map;
    markersLayerRef.current = markersLayer;

    return () => {
      map.remove();
      mapRef.current = null;
      markersLayerRef.current = null;
    };

    // We only want to create the map once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.setView([latitude, longitude], zoom);
  }, [latitude, longitude, zoom]);

  useEffect(() => {
  if (!markersLayerRef.current) {
    return;
  }

  markersLayerRef.current.clearLayers();

  const bounds = L.latLngBounds();

  locations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng]);

    marker.bindPopup(
      `<strong>${location.name}</strong><br>
       ${location.region}<br>
       ${location.type}`
    );

    markersLayerRef.current.addLayer(marker);

    bounds.extend([location.lat, location.lng]);
  });

  if (locations.length > 0 && mapRef.current) {
    mapRef.current.fitBounds(bounds, {
      padding: [20, 20],
    });
  }
}, [locations]);

  return <div ref={mapContainerRef} className="map-view" />;
}

export default MapView;