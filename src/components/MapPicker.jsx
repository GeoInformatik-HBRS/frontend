import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ value, onChange }) {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;

      onChange({
        lat: lat,
        lon: lng,
      });
    },
  });

  if (!value) {
    return null;
  }

  return <Marker position={[value.lat, value.lon]} />;
}

export default function MapPicker({ value, onChange }) {
  return (
    <MapContainer
      center={[50.77, 7.19]}
      zoom={13}
      style={{ height: "350px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker value={value} onChange={onChange} />
    </MapContainer>
  );
}