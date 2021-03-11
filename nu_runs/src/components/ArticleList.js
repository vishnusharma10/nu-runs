import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return <>
    {articles.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content.substring(0, 150)}....</p>
      </Link>
    ))}
  </>
}
export default ArticleList;
