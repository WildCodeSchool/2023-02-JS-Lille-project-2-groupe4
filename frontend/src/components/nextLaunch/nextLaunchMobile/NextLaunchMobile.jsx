import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./NextLaunchMobile.module.css";
import CountdownTimer from "../countdownTimer/CountdownTimer";
import InfosModal from "../infosModal/InfosModal";

function NextLaunchMobile() {
  const url = `https://ll.thespacedevs.com/2.2.0/launch/upcoming/`;

  const [launcherIndex] = useState(0);
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

  return (
    <div className={styles.nextLaunchMobileContainer}>
      <div className={styles.launcherImageMobileContainer}>
        {data.results ? (
          <img
            className={styles.launcherMobileImage}
            src={data.results[launcherIndex].image}
            alt="launcher"
          />
        ) : null}
      </div>
      <div className={styles.descriptionMobileContainer}>
        <div className={styles.missionMobileContainer}>
          <p className={styles.titleMobileDescription}>Mission Name</p>
          {data.results ? (
            <h1 className={styles.missionMobileName}>
              {data.results[launcherIndex].mission.name}
            </h1>
          ) : null}

          {data.results ? (
            <InfosModal
              missionName={data.results[launcherIndex].mission.name}
              missionDescription={
                data.results[launcherIndex].mission.description
              }
            />
          ) : null}
        </div>
        <div className={styles.rocketMobileContainer}>
          <p className={styles.titleMobileDescription}>Rocket</p>
          {data.results ? (
            <h1 className={styles.missionMobileName}>
              {data.results[launcherIndex].rocket.configuration.name}
            </h1>
          ) : null}
        </div>
        <div className={styles.padMobileContainer}>
          <p className={styles.titleMobileDescription}>Pad</p>
          {data.results ? (
            <h1 className={styles.missionMobileName}>
              {data.results[launcherIndex].pad.name}
            </h1>
          ) : null}
        </div>
        <div className={styles.providerMobileContainer}>
          <p className={styles.titleMobileDescription}>Service Provider</p>
          {data.results ? (
            <h1 className={styles.missionMobileName}>
              {data.results[launcherIndex].launch_service_provider.name}
            </h1>
          ) : null}
        </div>
      </div>
      <div className={styles.weatherMobileContainer}>
        {data.results ? (
          <CountdownTimer data={data} launcherIndex={launcherIndex} />
        ) : null}
      </div>
    </div>
  );
}

export default NextLaunchMobile;
