import React, { useState } from "react";
import styles from "./NavAbout.module.css";

function NavBurger() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(prev);
  };

  return (
    <div className={styles.navBurger}>
      <ul className={styles.navBurgerLinks}>
        <li className={styles.navBurgerItem}>A propos</li>
        <li className={styles.navBurgerItem}>Contact</li>
      </ul>
      <button className={styles.burger}>
        <span className={styles.burgerBar}>About</span>
      </button>
    </div>
  );
}

export default NavBurger;
