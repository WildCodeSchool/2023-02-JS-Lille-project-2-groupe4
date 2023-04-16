import React, { useState, useEffect } from "react";
import axios from "axios";
import SpacecraftCard from "./SpacecraftCard";

export default function SpacecraftComponent() {
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
    (scraft, index) =>
      index < 1 && (
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
