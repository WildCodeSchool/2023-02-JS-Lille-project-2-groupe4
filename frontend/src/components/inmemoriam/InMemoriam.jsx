import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "./InMemoriam.module.css";
import astroData from "../../assets/data/astronauts.json";
import AstronautCard from "./astronautCard/AstronautCard";

export default function InMemoriam() {
  const [memory, setMemory] = useState(0);

  const nextCard = () => {
    setMemory(
      memory === astroData.length - 1 ? 0 : (prevIndex) => prevIndex + 1
    );
  };

  const prevCard = () => {
    setMemory(
      memory === 0 ? astroData.length - 1 : (prevIndex) => prevIndex - 1
    );
  };

  return (
    <div className={styles.inMemoContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>IN MEMORIAM</h1>
        <h3 className={styles.citation}>
          "For the people who made this possible."
        </h3>
      </div>
      <div className={styles.buttonsAndInfosContainer}>
        <div className={styles.leftButtonContainer}>
          <FaAngleLeft className={styles.button} onClick={() => prevCard()} />
        </div>
        <div className={styles.middleMemoriamContainer}>
          <div className={styles.infosLeft}>
            <img
              src={astroData[memory].photo_equipe}
              alt="Ship Crew"
              className={styles.imageShip}
            />
            <h2 className={styles.date}>{astroData[memory].date}</h2>
            <img
              className={styles.badgeMission}
              src={astroData[memory].badge}
              alt="Badge Mission"
            />
          </div>
          <div className={styles.infosRight}>
            <a
              href={astroData[memory].wiki}
              target="_blank"
              rel="noreferrer"
              className={styles.linkWiki}
            >
              <h2 className={styles.nameOfShip}>
                {astroData[memory].mission_name}
              </h2>
            </a>
            <div className={styles.astronautsContainer}>
              {astroData[memory].astronauts.map((astronaut) => (
                <AstronautCard
                  photo={astronaut.profile_image}
                  name={astronaut.name}
                  key={astronaut}
                  wiki={astronaut.wikipedia}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightButtonContainer}>
          <FaAngleRight className={styles.button} onClick={() => nextCard()} />
        </div>
      </div>
    </div>
  );
}
