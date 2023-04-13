import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./NextLaunchContainer.module.css";
import CountdownTimer from "./countdownTimer/CountdownTimer";
import Weather from "./weather/Weather";

function NextLaunchContainer() {
  const url = `https://ll.thespacedevs.com/2.2.0/launch/upcoming/`;

  const [launcherIndex, setLauncherIndex] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const nextLaunch = () => {
    setLauncherIndex(
      launcherIndex === data.results.length - 1
        ? 0
        : (prevIndex) => prevIndex + 1
    );
  };

  const prevLaunch = () => {
    setLauncherIndex(
      launcherIndex === 0
        ? data.results.length - 1
        : (prevIndex) => prevIndex - 1
    );
  };

  return (
    <div className={styles.nextLaunchContainer}>
      {data.results ? (
        <Weather dataLauncher={data} launcherIndex={launcherIndex} />
      ) : null}
      {data.results ? (
        <CountdownTimer data={data} launcherIndex={launcherIndex} />
      ) : null}
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
