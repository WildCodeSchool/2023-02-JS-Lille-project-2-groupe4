import React from "react";
import PropTypes from "prop-types";
import "./ArticleCard.module.css";

function ArticleCard({ title, summary, imageUrl, url }) {
  return (
    <div className="articleCard">
      <h3 className="artTitle">{title}</h3>
      <h4 className="artSum">{summary}</h4>
      <img className="artImg" src={imageUrl} alt="rapport avec l'article" />
      <p className="artUrl">{url}</p>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default ArticleCard;
