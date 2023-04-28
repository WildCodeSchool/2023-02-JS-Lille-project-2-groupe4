import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleCard.module.css";

function ArticleCard({ title, imageUrl, url }) {
  return (
    <div className={styles.articleBloc}>
      <a
        className={styles.articleCard}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={styles.artTitle}>{title}</h3>

        <img
          className={styles.artImg}
          src={imageUrl}
          alt="rapport avec l'article"
        />
      </a>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
