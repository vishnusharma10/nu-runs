import React from "react";
import { Link } from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";

const ArticleList = ({ articles }) => {
  return <>
  <div>
    <div>
      <Container>
        <Row>
        {articles.map((article, key) => (
          <Col>
         
        <Card >
  <Card.Body>
  <Link key={key} to={`/article/${article.name}`}>
    <Card.Title>{article.title}</Card.Title>
    </Link>
    <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
    <Card.Text>
    {article.content.substring(0, 150)}....
    </Card.Text>
    <p>{article.upvotes} Upvotes</p>
    <p>{article.comments.length} Comments</p>
  </Card.Body>
</Card>
     
          </Col>
     
    ))}
        </Row>
      </Container>
 
      </div>
      </div>
    
  </>
}
export default ArticleList;
