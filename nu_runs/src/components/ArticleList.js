import React,{useState} from "react";
import { Link } from "react-router-dom";
import BackgroundImage1 from "../assets/img/bg1.jpg";
import BackgroundImage2 from "../assets/img/bg2.jpg";
import BackgroundImage3 from "../assets/img/bg3.jpg";
import BackgroundImage4 from "../assets/img/bg4.jpg";
import BackgroundImage5 from "../assets/img/bg5.jpg";
import BackgroundImage6 from "../assets/img/bg6.jpg";
import BackgroundImage7 from "../assets/img/bg7.jpg";
import { Card, Row } from "react-bootstrap";

const ArticleList = ({ articles }) => {

  const images={
    1: BackgroundImage1,
    2:BackgroundImage2,
    3:BackgroundImage3,
    4:BackgroundImage4,
    5:BackgroundImage5,
    6:BackgroundImage6,
    7:BackgroundImage7
  }
  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Row>
          {articles.map((article, key) => (
            <div
              style={{
                marginBottom: "50px",
                display: "inline-block",
                padding: "20px",
              }}
            >
              <Card className="templateItem" style={{ width: "23rem" }}>
                <Card.Body>
                  <img
                    alt="..."
                    className="rounded-circle"
                    style={{
                      width: "100px",
                      height: "100px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                    src={images[key+1]}
                  />
                  <Link
                    style={{ color: "#3c6e71" }}
                    key={key}
                    to={`/article/${article.name}`}
                  >
                    <Card.Title>{article.title}</Card.Title>
                  </Link>
                  <Card.Text>{`${article.content.substring(
                    0,
                    150
                  )}....`}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
};
export default ArticleList;
