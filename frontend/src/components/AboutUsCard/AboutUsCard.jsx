import React from "react";
import Proptypes from "prop-types";
import styles from "./AboutUsCard.module.css";

export default function AboutUsCard({
  name,
  title,
  imgSrc,
  email,
  github,
  linkedin,
}) {
  return (
    <div className={styles.abUsContainerbloc}>
      <h3 className={styles.nameTitle}>{name}</h3>
      <h4 className={styles.titleStyle}> {title}</h4>
      <img className={styles.imgSrc} src={imgSrc} alt="PPastro" />
      <p className={styles.email}>{email}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <p className={styles.github}>{github}</p>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <p className={styles.linkedin}>{linkedin}</p>
      </a>
    </div>
  );
}

AboutUsCard.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  imgSrc: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  github: Proptypes.string.isRequired,
  linkedin: Proptypes.string.isRequired,
};
