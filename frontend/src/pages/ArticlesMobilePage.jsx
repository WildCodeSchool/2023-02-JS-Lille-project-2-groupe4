import React from "react";
import Article from "../components/article/Article";
import styles from "./ArticlesMobilePage.module.css";

function ArticlesMobilePage() {
  return (
    <div className={styles.articlesMobileContainer}>
      <Article />
    </div>
  );
}

export default ArticlesMobilePage;
