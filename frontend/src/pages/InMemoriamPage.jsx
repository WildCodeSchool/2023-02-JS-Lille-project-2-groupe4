import React from "react";
import InMemorial from "../components/inmemoriam/InMemoriam";
import styles from "./InMemoriamPage.module.css";
import Article from "../components/article/Article";

export default function InMemoriamPage() {
  return (
    <div className={styles.memoriamPage}>
      <div className={styles.inmemoriamAndArticlesContainer}>
        <div className={styles.inmemoriamContainer}>
          <InMemorial />
        </div>
        <div className={styles.articlesContainer}>
          <Article />
        </div>
      </div>
    </div>
  );
}
