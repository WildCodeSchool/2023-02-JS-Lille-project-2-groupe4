import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "./InMemoriam.module.css";
import astroData from "../data/astronauts.json";
import AstronautCard from "./AstronautCard";

/* import { FaAngleRight, FaAngleLeft } from "react-icons/fa"; */

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
      <h1 className={styles.title}>IN MEMORIAM</h1>
      <h3 className={styles.citation}>
        For the people who made this possible.
      </h3>

      <div className={styles.CONTENAIRCARDBTN}>
        <div className={styles.leftButtonContainer}>
          <FaAngleLeft className={styles.button} onClick={() => prevCard()} />
        </div>
        <div className={styles.card}>
          <div className={styles.astroContainer}>
            <div key={astroData.name} style={{ display: "flex" }}>
              <div className={styles.containerGauche}>
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
              <div className={styles.containerDroite}>
                <h2 className={styles.nameOfShip}>
                  {astroData[memory].mission_name}
                </h2>
                <div
                  className={styles.flexmess}
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {astroData[memory].astronauts.map((astronaut) => (
                    <AstronautCard
                      photo={astronaut.profile_image}
                      name={astronaut.name}
                      key={astronaut}
                    />
                  ))}
                </div>
              </div>
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
