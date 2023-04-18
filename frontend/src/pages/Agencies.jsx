import React from "react";
import MapAgencies from "@components/mapAgencies/MapAgencies";
import styles from "./Agencies.module.css";

function Agencies() {
  return (
    <div className={styles.agenciesContainer}>
      <MapAgencies />
    </div>
  );
}

export default Agencies;
