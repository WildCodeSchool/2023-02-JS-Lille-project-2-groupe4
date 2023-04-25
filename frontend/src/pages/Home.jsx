import React from "react";
import NavBar from "@components/navBar/NavBar";
import NavbarMobile from "@components/navbarMobile/NavbarMobile";
import Footer from "@components/footer/Footer";
import NextLaunchContainer from "../components/nextLaunch/NextLaunchContainer";
import NextLaunchMobile from "../components/nextLaunch/nextLaunchMobile/NextLaunchMobile";
import Article from "../components/article/Article";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavbarMobile />
      <NavBar />
      <div className={styles.launchAndArticleContainer}>
        <div className={styles.leftContainer}>
          <NextLaunchContainer />
        </div>
        <div className={styles.rightContainer}>
          <Article />
        </div>
      </div>
      <div className={styles.launchMobileContainer}>
        <NextLaunchMobile />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
