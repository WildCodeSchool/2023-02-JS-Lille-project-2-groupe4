import { useEffect } from "react";
import styles from "./InMemoriam.module.css";
import astroData from "../data/astronauts.json";
import AstronautCard from "./AstronautCard";
/* import { FaAngleRight, FaAngleLeft } from "react-icons/fa"; */

export default function InMemoriam() {
  /* const [memory, setMemory] = useState([]); */

  useEffect(() => {
    /*      const nextCard = () => {
      setMemory(
        memory === mission.length - 1 ? 0 : (prevIndex) => prevIndex + 1
      );
    };

    const prevCard = () => {
      setMemory(
        memory === 0 ? mission.length - 1 : (prevIndex) => prevIndex - 1
      ); 
    }; */
  }, []);

  return (
    <div className={styles.inMemoContainer}>
      <h1 className={styles.title}>IN MEMORIAM</h1>
      <h3 className={styles.citation}>
        For the people who made this possible.
      </h3>
      {/*         <FaAngleLeft className={styles.button} oncClick={() => prevCard} /> */}
      <div className={styles.card}>
        <div className={styles.astroContainer}>
          {astroData.map((mission) => (
            <div key={mission.name}>
              <div className={styles.containerGauche}>
                <img
                  src={mission.photo_equipe}
                  alt="Ship Crew"
                  className={styles.imageShip}
                />
                <h2 className={styles.date}>{mission.date}</h2>
                <img
                  className={styles.badgeMission}
                  src={mission.badge}
                  alt="Badge Mission"
                />
              </div>
              <div>
                {mission.astronauts.map((astronaut) => (
                  <AstronautCard
                    astronaut={astronaut}
                    key={astronaut.name}
                    className={styles.astroContainer}
                  />
                ))}
              </div>

              <div />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
