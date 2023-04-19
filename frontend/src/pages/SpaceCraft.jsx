import React from "react";
import SpaceCraftContainer from "@components/spacecraft-container/SpaceCraftContainer";
import styles from "./SpaceCraft.module.css";

export default function SpaceCraft() {
  return (
    <div className={styles.spacecraftPage}>
      <SpaceCraftContainer />
    </div>
  );
}
