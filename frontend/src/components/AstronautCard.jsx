import PropTypes from "prop-types";
import styles from "./InMemoriam.module.css";

function AstronautCard({ astronaut }) {
  return (
    <div className={styles.astroCard}>
      <img
        className={styles.profilePhoto}
        src={astronaut.profile_image}
        alt="Photos of astronauts"
      />
      <h2>{astronaut.name}</h2>
    </div>
  );
}

AstronautCard.propTypes = {
  astronaut: PropTypes.object.isRequired,
};

export default AstronautCard;
