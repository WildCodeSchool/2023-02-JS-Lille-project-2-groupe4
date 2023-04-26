import React from "react";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import Article from "../components/article/Article";
import Footer from "../components/footer/Footer";
import styles from "./ArticlesMobilePage.module.css";

function ArticlesMobilePage() {
  return (
    <div className={styles.articlesMobileContainer}>
      <NavbarMobile />
      <Article />
      <Footer />
    </div>
  );
}

export default ArticlesMobilePage;
