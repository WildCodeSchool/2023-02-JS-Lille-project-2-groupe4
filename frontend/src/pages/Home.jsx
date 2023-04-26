import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import NextLaunchContainer from "../components/nextLaunch/NextLaunchContainer";
import Article from "../components/article/Article";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <NextLaunchContainer />
      </div>
      <div className={styles.rightContainer}>
        <Article />
      </div>
      {/* <div>
        <AboutUs />
      </div> */}
    </div>
  );
}

export default Home;
