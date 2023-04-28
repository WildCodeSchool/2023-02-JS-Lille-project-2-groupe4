import React from "react";
import SpaceCraftContainer from "@components/spacecraft-container/SpaceCraftContainer";
import Article from "../components/article/Article";
import styles from "./SpaceCraft.module.css";

export default function SpaceCraft() {
  return (
    <div className={styles.spacecraftPage}>
      <div className={styles.containerGlobal}>
        <div className={styles.containerLeft}>
          <SpaceCraftContainer />
        </div>
        <div className={styles.containerRight}>
          <Article />
        </div>
      </div>
    </div>
  );
}
