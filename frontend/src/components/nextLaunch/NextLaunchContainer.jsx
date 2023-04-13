import React, { useState } from "react";
import styles from "./NextLaunchContainer.module.css";
import CountdownTimer from "./countdownTimer/CountdownTimer";
import Weather from "./weather/Weather";
import defaultLaunch from "../../data/defaultLaunch.json";

function NextLaunchContainer() {
  const [launcherIndex, setLauncherIndex] = useState(0);

  const convertedDate = new Date(defaultLaunch[launcherIndex].net).getTime();
  const latitudeToDisplay = defaultLaunch[launcherIndex].pad.latitude;
  const longitudeToDisplay = defaultLaunch[launcherIndex].pad.longitude;

  const nextLaunch = () => {
    setLauncherIndex(
      launcherIndex === defaultLaunch.length - 1
        ? 0
        : (prevIndex) => prevIndex + 1
    );
  };

  const prevLaunch = () => {
    setLauncherIndex(
      launcherIndex === 0
        ? defaultLaunch.length - 1
        : (prevIndex) => prevIndex - 1
    );
  };

  return (
    <div className={styles.nextLaunchContainer}>
      <CountdownTimer countdownTimestampMs={convertedDate} />

      <Weather lat={latitudeToDisplay} lon={longitudeToDisplay} />

      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => prevLaunch()}
        >
          Prev
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => nextLaunch()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NextLaunchContainer;
