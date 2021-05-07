import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFouldPage";
import axios from "axios";
import CommentList from "../components/CommentList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
import { Jumbotron, Row } from "react-bootstrap";
import BackgroundImage from "../assets/img/theme/profile-cover.jpg";
import BackgroundImage1 from "../assets/img/bg1.jpg";
import BackgroundImage2 from "../assets/img/bg2.jpg";
import BackgroundImage3 from "../assets/img/bg3.jpg";
import BackgroundImage4 from "../assets/img/bg4.jpg";
import BackgroundImage5 from "../assets/img/bg5.jpg";
import BackgroundImage6 from "../assets/img/bg6.jpg";
import BackgroundImage7 from "../assets/img/bg7.jpg";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/api/all-articles");
      const articles = result.data.data["all-articles"];
      setArticles(articles);
      setArticle(articles.find((article) => article.name === name));
      console.log(articles);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage></NotFoundPage>;
  }

  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <React.Fragment>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>{article.title}</h1>
          <UpvotesSection
            articleName={name}
            upvotes={article.upvotes}
            setArticleInfo={setArticle}
          ></UpvotesSection>
          <p
            style={{
              textAlign: "justify",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            {article.content}
          </p>
          <AddCommentForm
            articleName={name}
            setArticleInfo={setArticle}
          ></AddCommentForm>
        </div>
        <CommentList article={article}></CommentList>

        <Row>
          <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h2 style={{color:"white",marginTop:"50px"}}>Other Articles</h2>

            <ArticleList articles={otherArticles}></ArticleList>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default ArticlePage;
