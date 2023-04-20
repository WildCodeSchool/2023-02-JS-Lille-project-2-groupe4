import React from "react";
import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        {" "}
        &#169; Helius project for{" "}
        <a
          className={styles.wildCodeSchoolLink}
          href="https://www.wildcodeschool.com/"
          target="_blank"
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
        >
          <FaGithub className={styles.githubIcon} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
