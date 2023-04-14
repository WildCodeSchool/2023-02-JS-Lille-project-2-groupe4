import React from "react";

function ArticleCard({ title, summary, image_url, url }) {
  return (
    <div className="ArticleCard">
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <img src={image_url} alt="rapport avec l'article" />
      <p>{url}</p>
    </div>
  );
}

export default ArticleCard;
