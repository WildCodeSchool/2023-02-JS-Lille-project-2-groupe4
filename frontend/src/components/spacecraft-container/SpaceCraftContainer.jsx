import React, { useState, useEffect } from "react";
import axios from "axios";
import SpacecraftCard from "./spacecraft-card/SpacecraftCard";

export default function SpaceCraftContainer() {
  const url = `https://ll.thespacedevs.com/2.2.0/spacecraft/`;

  const [spacecraftData, setSpacecraftData] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => {
        setSpacecraftData(response.data);
      });
  }, []);

  return spacecraftData?.results.map(
    (craft, index) =>
      index < 2 && (
        <SpacecraftCard
          key={craft.id}
          imgSrc={craft.spacecraft_config.image_url}
          name={craft.name}
          inUse={craft.spacecraft_config.in_use}
          description={craft.description}
        />
      )
  );
}
