import PropTypes from "prop-types";
import styles from "./InMemoriam.module.css";

function AstronautCard({ photo, name, wiki }) {
  return (
    <a href={wiki} target="_blank" rel="noreferrer" className={styles.linkWiki}>
      <div className={styles.astroCard}>
        <img
          className={styles.profilePhoto}
          src={photo}
          alt="Photos of astronauts"
        />
        <h2 className={styles.astroName}>{name}</h2>
      </div>
    </a>
  );
}

AstronautCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
};

export default AstronautCard;
