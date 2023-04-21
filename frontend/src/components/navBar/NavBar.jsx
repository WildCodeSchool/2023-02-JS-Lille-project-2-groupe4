import React from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/LOGO_FINAL_HELIUS_SN.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            className={styles.heliusLogo}
            src={logo}
            alt="helius logo"
            href="/#"
          />
        </Link>
      </div>

      <ul className={styles.navListsContainer}>
        <li className={styles.navText}>
          <Link className={styles.navbarLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navText}>
          <Link className={styles.navbarLink} to="agencies">
            Agencies
          </Link>
        </li>
        <li className={styles.navText}>
          <Link className={styles.navbarLink} to="/#">
            Spacecrafts
          </Link>
        </li>
        <li className={styles.navText}>
          <Link className={styles.navbarLink} to="/#">
            Astronauts
          </Link>
        </li>
        <li className={styles.navText}>
          <Link className={styles.navbarLink} to="/#">
            In Memoriam
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
