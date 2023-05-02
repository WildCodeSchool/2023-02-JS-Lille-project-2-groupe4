import React from "react";
import PropTypes from "prop-types";
import styles from "./SpacecraftCard.module.css";

export default function SpacecraftCard({ imgSrc, name, inUse, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.craftImage} src={imgSrc} alt="SpaceCraft" />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.infoContainer}>
          <h3 className={styles.bodyTitle}>{name}</h3>
          <p className={styles.inuseInfo}>{inUse ? "active" : "in-active"}</p>
        </div>
        <div className={styles.infoSpacecraft}>
          <p className={styles.paragraphe}>{description}</p>
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
