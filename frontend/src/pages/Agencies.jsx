import React from "react";
import MapAgencies from "@components/mapAgencies/MapAgencies";
import NavBar from "@components/navBar/NavBar";
import Article from "../components/article/Article";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import Footer from "../components/footer/Footer";
import styles from "./Agencies.module.css";

function Agencies() {
  return (
    <div className={styles.agenciesContainer}>
      <NavbarMobile />
      <NavBar />
      <div className={styles.padsAndArticlesContainer}>
        <div className={styles.leftContainer}>
          <MapAgencies />
        </div>
        <div className={styles.rightContainer}>
          <Article />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Agencies;
