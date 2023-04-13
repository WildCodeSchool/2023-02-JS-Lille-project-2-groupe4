import React from "react";
import NextLaunchContainer from "../components/nextLaunch/NextLaunchContainer";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NextLaunchContainer />
    </div>
  );
}

export default Home;
