import React from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/logoHelius-removebg-preview1.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.heliusLogo}
          src={logo}
          alt="helius logo"
          href="/#"
        />
      </div>

      <ul className={styles.navListsContainer}>
        <li className={styles.navText}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navText}>
          <Link to="/agencies">Agencies</Link>
        </li>
        <li className={styles.navText}>
          <Link to="/#">Spacecrafts</Link>
        </li>
        <li className={styles.navText}>
          <Link to="/#">Astronauts</Link>
        </li>
        <li className={styles.navText}>
          <Link to="/#">In Memoriam</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
