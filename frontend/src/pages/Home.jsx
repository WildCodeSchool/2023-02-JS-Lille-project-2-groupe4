import React from "react";
import NavBar from "@components/navBar/NavBar";
import NextLaunchContainer from "../components/nextLaunch/NextLaunchContainer";
import Footer from "@components/footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <NextLaunchContainer />
      <Footer />
    </div>
  );
}

export default Home;
