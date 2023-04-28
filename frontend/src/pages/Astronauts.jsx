import React from "react";

import styles from "./Astronauts.module.css";
import AstaunautsPage from "../hof/AstronautsPage";

function Astronauts() {
  return (
    <div className={styles.Astro}>
      <AstaunautsPage />
    </div>
  );
}
export default Astronauts;
