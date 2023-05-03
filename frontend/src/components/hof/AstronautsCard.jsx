import React from "react";
import PropTypes from "prop-types";
import { FaWikipediaW } from "react-icons/fa";
import styles from "./AstronautsCard.module.css";

function AstronautsCard({ data }) {
  return (
    <div className={styles.astronautCard}>
      <div className={styles.nameAndImage}>
        <img
          className={styles.img_profile}
          src={data.profile_image}
          alt="imgastronaute"
        />
        <h3 className={styles.astronautName}>{data.name}</h3>
        <p className={styles.astronautAge}>({data.age} years)</p>
      </div>
      <div className={styles.astronautDescription}>
        <p className={styles.astronautNationality}>
          Nationality : {data.nationality}
        </p>
        <p className={styles.astronautFlightNumber}>
          Number of flight : {data.flights_count}
        </p>
        <p className={styles.astronautBio}>
          Description: <br />
          {data.bio}
        </p>
      </div>
      <div className={styles.wikiContainer}>
        <a href={data.wiki} target="blank" className={styles.wikiButton}>
          <FaWikipediaW />
        </a>
      </div>
    </div>
  );
}
AstronautsCard.propTypes = {
  data: PropTypes.shape({
    profile_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    flights_count: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    wiki: PropTypes.string.isRequired,
  }).isRequired,
};
export default AstronautsCard;
