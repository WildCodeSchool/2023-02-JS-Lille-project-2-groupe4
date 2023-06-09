import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../articleCard/ArticleCard";
import styles from "./Article.module.css";

function Article() {
  const [newArticle, setNewArticle] = useState();

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => setNewArticle(response.data));
  }, []);

  return (
    <div className={styles.articlesContainer}>
      <h2 className={styles.newsTitle}>LAST NEWS</h2>
      <div className={styles.scrollContainer}>
        {newArticle &&
          newArticle
            .map(
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
            .sort(() => Math.random() - 0.5)}
      </div>
      <div className={styles.seeMore}>Scroll down to see more &#8595;</div>
    </div>
  );
}

export default Article;
