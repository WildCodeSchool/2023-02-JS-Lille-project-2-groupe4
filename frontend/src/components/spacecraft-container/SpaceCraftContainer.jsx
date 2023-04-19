import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./SpaceCraftContainer.module.css";
import SpacecraftCard from "./spacecraft-card/SpacecraftCard";

export default function SpaceCraftContainer() {
  const url = `https://ll.thespacedevs.com/2.2.0/spacecraft/`;

  const [newSpacecraft, setNewSpacecraft] = useState(0);
  const [spacecraftData, setSpacecraftData] = useState({});
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => setSpacecraftData(response.data));
  }, []);

  const nextCraft = () => {
    setNewSpacecraft(
      newSpacecraft === spacecraftData.results.length - 1
        ? 0
        : (craftIndex) => craftIndex + 2
    );
  };

  const prevCraft = () => {
    setNewSpacecraft(
      newSpacecraft === 0
        ? spacecraftData.results.length - 1
        : (craftIndex) => craftIndex - 2
    );
  };

  return (
    <div className={styles.containerSpacecraft}>
      <div className={styles.leftButtonContainer}>
        <FaAngleLeft className={styles.button} onClick={() => prevCraft()} />
      </div>
      {spacecraftData.results
        ? spacecraftData.results.map(
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
          )
        : null}
      <div className={styles.rightButtonContainer}>
        <FaAngleRight className={styles.button} onClick={() => nextCraft()} />
      </div>
    </div>
  );
}
