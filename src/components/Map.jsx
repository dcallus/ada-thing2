import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import train from "../assets/train.svg";

const position = [55.85991134458721, -4.24560258713839]; //AutoRek Glasgow Office

const Map = () => {
  function FlyTo() {
    const map = useMap();
    //TODO: Not working, fix me!!
    map.flyTo(position);
  }

  useEffect(() => {
    const handleResize = () => {
      // Trigger a re-render to update the map size
      // This is specific to react-leaflet
      window.dispatchEvent(new Event("resize"));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const icon = L.icon({
    iconUrl: train,
    iconSize: [30, 30],
    popupAnchor: [0, -20],
  });

  return (
    <div style={{ marginRight: "1px", marginLeft: "20px" }}>
      <MapContainer
        id="map"
        center={position}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          width: "90%",
          border: "2px solid #575aab",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Your location.</Popup>
        </Marker>
        <Marker icon={icon} position={[55.86253468214248, -4.251135540459741]}>
          <Popup>Queen Street Station</Popup>
        </Marker>
        <Marker icon={icon} position={[55.859060585893495, -4.258108269975646]}>
          <Popup>Central Station</Popup>
        </Marker>
        <Marker icon={icon} position={[55.9524390126892, -3.187764022611267]}>
          <Popup>Waverly Station</Popup>
        </Marker>
        <Marker icon={icon} position={[55.94566860575985, -3.2182956442273674]}>
          <Popup>Haymarket Station</Popup>
        </Marker>
        <FlyTo />
      </MapContainer>
    </div>
  );
};

export default Map;
