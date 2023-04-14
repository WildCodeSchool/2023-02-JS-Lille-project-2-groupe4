import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../articleCard/ArticleCard";

function Article() {
  const [newArticle, setNewArticle] = useState();
  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((response) => setNewArticle(response.data));
  }, []);

  return newArticle?.results.map(
    (article, index) =>
      index < 5 && (
        <ArticleCard
          key={article.id}
          title={article.title}
          url={article.url}
          image_url={article.image_url}
          summary={article.summary}
        />
      )
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgage_url: PropTypes.string,
    summary: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Article;
