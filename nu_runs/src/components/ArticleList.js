import React from "react";
import { Link } from "react-router-dom";

import { Card, Col, Jumbotron, Row } from "react-bootstrap";

const ArticleList = ({ articles }) => {
  return (
    <>
        <div className="site-card-wrapper" style={{padding:"5px"}}>
          <Jumbotron>
          <Row>
            {articles.map((article, key) => (
              <div style={{marginBottom:"50px" }}>
                <Col style={{ display: "inline-block" }}>
                  <Card className="templateItem" style={{ width: "22rem" }}>
                    <Card.Body>
                     <Link style={{color:"#3c6e71"}}key={key} to={`/article/${article.name}`}>
                     <Card.Title>{article.title}</Card.Title>
                     </Link>
                      <Card.Text>{`${article.content.substring(
                        0,
                        150
                      )}....`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
          </Jumbotron>
          
        </div>
    </>
  );
};
export default ArticleList;
