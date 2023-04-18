import React from "react";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";

function App() {
  return (
    <div className={styles.app}>
      <Home />
      {/* <Agencies /> */}
    </div>
  );
}

export default App;
