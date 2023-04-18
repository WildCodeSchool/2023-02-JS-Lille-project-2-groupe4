import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../articleCard/ArticleCard";
import "./Article.css";

function Article() {
  const [newArticle, setNewArticle] = useState();
  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((response) => setNewArticle(response.data));
  }, []);

  return newArticle?.results.map(
    (article, index) =>
      index < 3 && (
        <ArticleCard
          key={article.id}
          title={article.title}
          url={article.url}
          imageUrl={article.image_url}
          summary={article.summary}
        />
      )
  );
}

export default Article;
