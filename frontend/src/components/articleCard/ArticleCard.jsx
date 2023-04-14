import React from "react";
import PropTypes from "prop-types";

function ArticleCard({ title, summary, imageUrl, url }) {
  return (
    <div className="ArticleCard">
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <img src={imageUrl} alt="rapport avec l'article" />
      <p>{url}</p>
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
