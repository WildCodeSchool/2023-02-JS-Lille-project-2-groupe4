import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./SpacecraftCard.module.css";

export default function SpacecraftCard({ imgSrc, name, inUse, description }) {
  const url = `https://ll.thespacedevs.com/2.2.0/spacecraft/`;

  // const [craftIndex, setCraftIndex] = useState(0);
  const [spaceData, setSpaceData] = useState({});
  console.info(spaceData);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => {
        setSpaceData(response.data);
      });
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.spaceCraftCard}>
        <img className={styles.craftImage} src={imgSrc} alt="SpaceCraft" />
        <div className={styles.bodyContainer}>
          <div className={styles.infoContainer}>
            <h3 className={styles.bodyTitle}>{name}</h3>
            <h4 className={styles.inuseInfo}>
              {inUse ? "active" : "in-active"}
            </h4>
          </div>
          <div className={styles.infoSpacecraft}>
            <p className={styles.paragraphe}>{description}</p>
          </div>
          {/* <div className={styles.button}>
            <button type="button"> Preview</button>
            <button type="button">Next</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

SpacecraftCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inUse: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};
