import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./MapAgencies.css";
import "leaflet/dist/leaflet.css";

function MapAgencies() {
  const [data, setData] = useState({});
  const [minLaunchCount, setMinLaunchCount] = useState(25);
  const url = `https://ll.thespacedevs.com/2.2.0/pad/?total_launch_count__gt=25`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: import.meta.env.TOKEN,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="mapContainer">
      <h1 className="agencieTitle">LAUNCH PADS</h1>
      <div className="launchCounterContainer">
        <h2 className="counterTitle">Min. launch count :</h2>
        <Box width={300}>
          <Slider
            defaultValue={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            max={1000}
            step={50}
            sx={{
              width: 300,
              color: "#8338ec",
              opacity: "0.6",
            }}
            onChange={(e) => setMinLaunchCount(e.target.value)}
          />
        </Box>
      </div>

      <MapContainer
        center={[51.441335, 5.803069]}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.results &&
          data.results.map((agency) =>
            agency.location.total_launch_count > minLaunchCount ? (
              <Marker
                key={agency.id}
                position={[agency.latitude, agency.longitude]}
              >
                <Popup>
                  <p className="padName">{agency.name} </p>
                  <p className="padLaunchCount">
                    Total launch count: {agency.location.total_launch_count}
                  </p>
                  <p className="padLocation">{agency.location.name} </p>
                </Popup>
              </Marker>
            ) : null
          )}
      </MapContainer>
    </div>
  );
}

export default MapAgencies;
