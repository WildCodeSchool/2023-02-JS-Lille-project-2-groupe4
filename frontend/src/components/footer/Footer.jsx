import React from "react";
import { FaGithub } from "react-icons/fa";
import AboutUsModal from "./aboutUsModal/AboutUsModal";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        &#169; Helius project for&nbsp;
        <a
          className={styles.wildCodeSchoolLink}
          href="https://www.wildcodeschool.com/"
          target="_blank"
          rel="noreferrer"
        >
          Wild Code School
        </a>
        .
      </p>

      <p className={styles.iconContainer}>
        <a
          className={styles.aContainer}
          href="https://github.com/Romain-Constant"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.githubIcon} />
        </a>
      </p>
      <AboutUsModal />
    </div>
  );
}

export default Footer;
