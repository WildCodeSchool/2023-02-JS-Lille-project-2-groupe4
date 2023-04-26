import PropTypes from "prop-types";
import styles from "./InMemoriam.module.css";

function AstronautCard({ photo, name }) {
  return (
    <div className={styles.astroCard}>
      <img
        className={styles.profilePhoto}
        src={photo}
        alt="Photos of astronauts"
      />
      <h2 className={styles.astroName}>{name}</h2>
    </div>
  );
}

AstronautCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AstronautCard;
