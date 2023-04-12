import React, { useState } from "react";
import styles from "./NextLaunchContainer.module.css";
import CountdownTimer from "./countdownTimer/CountdownTimer";
import Weather from "./weather/Weather";
import defaultLaunch from "../../data/defaultLaunch.json";

function NextLaunchContainer() {
  const [launchIndex] = useState(1);

  const convertedDate = new Date(defaultLaunch[launchIndex].net).getTime();

  return (
    <div className={styles.nextLaunchContainer}>
      <CountdownTimer countdownTimestampMs={convertedDate} />
      <Weather
        lat={defaultLaunch[launchIndex].pad.latitude}
        lon={defaultLaunch[launchIndex].pad.longitude}
      />
    </div>
  );
}

export default NextLaunchContainer;
