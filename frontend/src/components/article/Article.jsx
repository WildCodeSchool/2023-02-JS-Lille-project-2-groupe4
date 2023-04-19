import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../articleCard/ArticleCard";
import styles from "./Article.module.css";

function Article() {
  const [newArticle, setNewArticle] = useState({});

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles/", {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => setNewArticle(response.data));
  }, []);

  return (
    <div className={styles.articlesContainer}>
      {newArticle.results
        ? newArticle.results.map(
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
          )
        : null}
    </div>
  );
}

export default Article;
