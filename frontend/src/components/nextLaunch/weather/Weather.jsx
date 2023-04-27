import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Weather.module.css";

function Weather({ dataLauncher, launcherIndex }) {
  const [data, setData] = useState({});
  const lat = dataLauncher.results[launcherIndex].pad.latitude;
  const lon = dataLauncher.results[launcherIndex].pad.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8c8b2017a4e7fe9a3472175bec3b0b99`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [lat, lon]);

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.topCard}>
        <div className={styles.cityContainer}>
          <h1 className={styles.mainText}>{data.name}</h1>
          <p className={styles.textDescription}>City</p>
        </div>
        <div className={styles.countryContainer}>
          <div className={styles.containerRight}>
            {data.sys ? (
              <h1 className={styles.mainText}>{data.sys.country}</h1>
            ) : null}
          </div>

          <p className={styles.textDescription}>Country</p>
        </div>
      </div>
      <div className={styles.bottomCard}>
        <div className={styles.tempContainer}>
          <p className={styles.textDescription}>Temp</p>
          {data.main ? (
            <h1 className={styles.mainText}>{data.main.temp.toFixed()}°C</h1>
          ) : null}
        </div>
        <div className={styles.middleContainer}>
          <p className={styles.textDescription}>Weather</p>
          {data.weather ? (
            <h1 className={styles.mainText}>{data.weather[0].main}</h1>
          ) : null}
        </div>
        <div className={styles.windContainer}>
          <div className={styles.containerRight}>
            <p className={styles.textDescription}>Wind</p>
          </div>

          {data.wind ? (
            <h1 className={styles.mainText}>
              {(data.wind.speed * 3.6).toFixed()}km/h
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = {
  dataLauncher: PropTypes.oneOfType([PropTypes.object]).isRequired,
  launcherIndex: PropTypes.number.isRequired,
};

export default Weather;
