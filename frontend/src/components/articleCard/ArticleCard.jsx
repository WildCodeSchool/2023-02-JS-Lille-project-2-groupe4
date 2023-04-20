import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleCard.module.css";

function ArticleCard({ title, /* summary */ imageUrl, url }) {
  return (
    <>
      {/* <div className={styles.articleCard}>
        <h3 className={styles.artTitle}>{title}</h3>
        /* <p className={styles.artSum}>{summary}</p> 
        <img
          className={styles.artImg}
          src={imageUrl}
          alt="rapport avec l'article"
        />
        <p className={styles.artUrl}>{url}</p>
      </div> */}
      <a
        className={styles.articleCard}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={styles.artTitle}>{title}</h3>
        {/* <p className={styles.artSum}>{summary}</p> */}
        <img
          className={styles.artImg}
          src={imageUrl}
          alt="rapport avec l'article"
        />
      </a>
    </>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  /* summary: PropTypes.string.isRequired, */
};

export default ArticleCard;
