import styles from "../components/InMemoriam.module.css";

const AstronautCard = ({ astronaut }) => {
  return (
    <div className={styles.astroCard}>
      <img className={styles.profilePhoto} src={astronaut.profile_image} />
      <h2>{astronaut.name}</h2>
    </div>
  );
};

export default AstronautCard;
