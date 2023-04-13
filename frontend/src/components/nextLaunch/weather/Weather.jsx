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
      <div>
        <div>
          <h1 className={styles.city}>{data.name}</h1>
        </div>
        <div className={styles.temp}>
          {data.main ? (
            <h1 className={styles.tempText}>{data.main.temp.toFixed()}°C</h1>
          ) : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
        </div>
        <div className="humidity">
          {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
          {data.wind ? <p>{(data.wind.speed * 3.6).toFixed()} km/h</p> : null}
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
