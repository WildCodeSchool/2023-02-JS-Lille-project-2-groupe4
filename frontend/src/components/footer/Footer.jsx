import React from "react";
import {
  FaGithub,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import AboutUsModal from "./aboutUsModal/AboutUsModal";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <FaFigma className={styles.githubIconNoHover} />
      <AiOutlineHtml5 className={styles.githubIconNoHover} />
      <FaCss3Alt className={styles.githubIconNoHover} />
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
      <FaReact className={styles.githubIconNoHover} />
      <TbBrandJavascript className={styles.githubIconNoHover} />
      <FaNodeJs className={styles.githubIconNoHover} />
    </div>
  );
}

export default Footer;
