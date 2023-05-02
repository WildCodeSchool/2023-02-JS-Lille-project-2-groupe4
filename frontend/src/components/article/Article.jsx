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
          Authorization: import.meta.env.VITE_TOKEN,
        },
      })
      .then((response) => setNewArticle(response.data));
  }, []);

  return (
    <div className={styles.articlesContainer}>
      <h2 className={styles.newsTitle}>Last News</h2>
      <div className={styles.scrollContainer}>
        {newArticle.results
          ? newArticle.results.map(
              (article, index) =>
                index < 10 && (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    url={article.url}
                    imageUrl={article.imageUrl}
                  />
                )
            )
          : null}
      </div>
    </div>
  );
}

export default Article;
