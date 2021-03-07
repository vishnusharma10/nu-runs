import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFouldPage";
import axios from "axios";
import CommentList from "../components/CommentList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/api/all-articles");
      const articles = result.data.data["all-articles"];
      setArticles(articles);
      setArticle(articles.find(article => article.name===name));
      console.log(articles);
    };
    fetchData();
  },[name]);

  

  if (!article) {
    return <NotFoundPage></NotFoundPage>;
  }

  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={article.upvotes}
        setArticleInfo={setArticle}
      ></UpvotesSection>
      <p>{article.content}</p>
      <AddCommentForm
        articleName={name}
        setArticleInfo={setArticle}
      ></AddCommentForm>
      <h2>Other Articles</h2>
      <CommentList article= {article}></CommentList>
      <ArticleList articles={otherArticles}></ArticleList>
    </React.Fragment>
  );
};
export default ArticlePage;
