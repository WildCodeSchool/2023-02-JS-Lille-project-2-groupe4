import React from "react";
import PropTypes from "prop-types";
import styles from "./AstronautsPage.module.css";

function AstronautsCard({ data }) {
  return (
    <div className={styles.card_astronaute}>
      <div className={styles.card_img}>
        <img
          className={styles.img_profile}
          src={data.profile_image}
          alt="imgastronaute"
        />
        <h3>{data.name}</h3>
        <br />
        <p>({data.age} years)</p>
      </div>
      <div className={styles.cont_astro}>
        <p>
          Nationality : {data.nationality} <br />
          Number of flight : {data.flights_count}
          <br />
          <br />
          Description: <br />
          {data.bio}
        </p>
      </div>
      <a href={data.wiki} target="blank" className={styles.button}>
        Wiki
      </a>
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
