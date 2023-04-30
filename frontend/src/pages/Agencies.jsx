import React from "react";
import MapAgencies from "../components/mapAgencies/MapAgencies";
import Article from "../components/article/Article";
import styles from "./Agencies.module.css";

function Agencies() {
  return (
    <div className={styles.agenciesContainer}>
      <div className={styles.padsAndArticlesContainer}>
        <div className={styles.leftContainer}>
          <MapAgencies />
        </div>
        <div className={styles.rightContainer}>
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Agencies;
