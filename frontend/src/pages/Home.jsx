import React from "react";
import NavBar from "@components/navBar/NavBar";
import NavbarMobile from "@components/navbarMobile/NavbarMobile";
import Footer from "@components/footer/Footer";
import NextLaunchContainer from "../components/nextLaunch/NextLaunchContainer";
import Article from "../components/article/Article";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavbarMobile />
      <NavBar />
      <NextLaunchContainer />
      <Footer />
    </div>
  );
}

export default Home;
