import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CountdownTimer.module.css";
import getRemainingTimeUntilMsTimestamp from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

function CountdownTimer({ data, launcherIndex }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const countdownTimestampMs = new Date(
    data.results[launcherIndex].net
  ).getTime();

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  return (
    <div className={styles.countdownTimer}>
      <div className={styles.datasContainer}>
        <span className={styles.time}>{remainingTime.days}</span>
        <span className={styles.units}>Days</span>
      </div>
      <div className={styles.datasContainer}>
        <span className={styles.twoNumbers}>{remainingTime.hours}</span>
        <span className={styles.units}>Hours</span>
      </div>
      <div className={styles.datasContainer}>
        <span className={styles.twoNumbers}>{remainingTime.minutes}</span>
        <span className={styles.units}>Mins</span>
      </div>
      <div className={styles.datasContainer}>
        <span className={styles.twoNumbers}>{remainingTime.seconds}</span>
        <span className={styles.units}>Secs</span>
      </div>
    </div>
  );
}

CountdownTimer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  launcherIndex: PropTypes.number.isRequired,
};

export default CountdownTimer;
