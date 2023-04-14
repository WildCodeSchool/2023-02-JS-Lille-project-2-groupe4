import React, { useState, useEffect } from "react";
import axios from "axios";
import SpacecraftCard from "./SpacecraftCard";

export default function SpacecraftComponent() {
  const [spacecraft, setSpacecraft] = useState();
  useEffect(() => {
    axios
      .get("https://ll.thespacedevs.com/2.2.0/spacecraft/")
      .then((response) => setSpacecraft(response.data));
  }, []);

  return spacecraft?.results.map(
    (scraft, index) =>
      index < 2 && (
        <SpacecraftCard
          key={scraft.id}
          imgSrc={scraft.spacecraft_config.image_url}
          name={scraft.name}
          inUse={scraft.spacecraft_config.in_use}
          description={scraft.description}
        />
      )
  );
}
