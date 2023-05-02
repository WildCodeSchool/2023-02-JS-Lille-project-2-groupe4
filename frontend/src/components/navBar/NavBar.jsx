import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO_FINAL_HELIUS_SN.png";
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Home
            <div className={styles.underline} />
          </NavLink>
        </li>
        <li className={styles.navText}>
          <NavLink
            to="/pads"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Pads
            <div className={styles.underline} />
          </NavLink>
        </li>

        <li className={styles.navText}>
          <NavLink
            to="/spacecrafts"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Spacecrafts
            <div className={styles.underline} />
          </NavLink>
        </li>
        <li className={styles.navText}>
          <NavLink
            to="/astronauts"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            Astronauts
            <div className={styles.underline} />
          </NavLink>
        </li>
        <li className={styles.navText}>
          <NavLink
            to="/inmemoriam"
            className={({ isActive }) =>
              isActive ? styles.menuActive : styles.navbarLink
            }
          >
            InMemoriam
            <div className={styles.underline} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
