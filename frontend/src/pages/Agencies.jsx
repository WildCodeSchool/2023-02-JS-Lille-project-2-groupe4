import React from "react";
import MapAgencies from "@components/mapAgencies/MapAgencies";
import NavBar from "@components/navBar/NavBar";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import styles from "./Agencies.module.css";

function Agencies() {
  return (
    <div className={styles.agenciesContainer}>
      <NavbarMobile />
      <NavBar />
      <MapAgencies />
    </div>
  );
}

export default Agencies;
