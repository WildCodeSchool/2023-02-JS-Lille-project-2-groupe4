import React from "react";
import styles from "./NextLaunchContainer.module.css";
import CountdownTimer from "./countdownTimer/CountdownTimer";
import Weather from "./weather/Weather";

function NextLaunchContainer() {
  return (
    <div className={styles.nextLaunchContainer}>
      <CountdownTimer countdownTimestampMs={16436736000000} />
      <Weather />
    </div>
  );
}

export default NextLaunchContainer;
