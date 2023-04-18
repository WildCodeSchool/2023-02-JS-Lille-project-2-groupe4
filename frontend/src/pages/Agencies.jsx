import React from "react";
import MapAgencies from "@components/mapAgencies/MapAgencies";
import NavBar from "@components/navBar/NavBar";
import styles from "./Agencies.module.css";

function Agencies() {
  return (
    <div className={styles.agenciesContainer}>
      <NavBar />
      <MapAgencies />
    </div>
  );
}

export default Agencies;
