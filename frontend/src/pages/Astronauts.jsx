import React from "react";
import styles from "./Astronauts.module.css";
import AstaunautsPage from "../components/hof/AstronautsPage";
import Article from "../components/article/Article";

function Astronauts() {
  return (
    <div className={styles.page}>
      <div className={styles.containerall}>
        <div className={styles.card_astronaute}>
          <AstaunautsPage />
        </div>
        <div className={styles.article}>
          <Article />
        </div>
      </div>
    </div>
  );
}
export default Astronauts;
