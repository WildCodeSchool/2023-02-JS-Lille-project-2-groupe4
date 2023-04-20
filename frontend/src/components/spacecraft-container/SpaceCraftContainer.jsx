import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./SpaceCraftContainer.module.css";
import SpacecraftCard from "./spacecraft-card/SpacecraftCard";

export default function SpaceCraftContainer() {
  const url = `https://ll.thespacedevs.com/2.2.0/spacecraft/`;

  const [newSpacecraft, setNewSpacecraft] = useState();
  const [spacecraftData, setSpacecraftData] = useState({});
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => {
        setSpacecraftData(response.data.results);
      });
  }, []);

  const nextCraft = () =>
    newSpacecraft <= 6
      ? setNewSpacecraft(newSpacecraft + 2)
      : setNewSpacecraft(0);

  const prevCraft = () =>
    newSpacecraft >= 2
      ? setNewSpacecraft(newSpacecraft - 2)
      : setNewSpacecraft(8);

  return (
    <div className={styles.containerSpacecraft}>
      <div>
        <FaAngleLeft className={styles.button} onClick={() => prevCraft()} />
      </div>
      {spacecraftData.length > 0 && (
        <div className={styles.containerCard}>
          <div className={styles.leftContainer}>
            <SpacecraftCard
              key={spacecraftData[newSpacecraft].id}
              imgSrc={spacecraftData[newSpacecraft].spacecraft_config.image_url}
              name={spacecraftData[newSpacecraft].name}
              inUse={spacecraftData[newSpacecraft].spacecraft_config.in_use}
              description={spacecraftData[newSpacecraft].description}
            />
          </div>
          <div className={styles.rightContainer}>
            <SpacecraftCard
              key={spacecraftData[newSpacecraft + 1].id}
              imgSrc={
                spacecraftData[newSpacecraft + 1].spacecraft_config.image_url
              }
              name={spacecraftData[newSpacecraft + 1].name}
              inUse={spacecraftData[newSpacecraft + 1].spacecraft_config.in_use}
              description={spacecraftData[newSpacecraft + 1].description}
            />
          </div>
        </div>
      )}
      <div>
        <FaAngleRight className={styles.button} onClick={() => nextCraft()} />
      </div>
    </div>
  );
}
