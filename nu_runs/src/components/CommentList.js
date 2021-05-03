import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CommentList = ({ article }) => {
  console.log(article.comments);
  const [comments, setComments] = useState([
    { readerName: 1, comment: "comment" },
  ]);

  useEffect(() => {
    setComments(article.comments);
  }, [article.comments]);
  return (
    <>
      <h3>Comments</h3>
      {comments !== undefined ? (
        comments.map((comment, key) => {
          return (
            <Row>
              <Col>
                <div key={key}>
                  <Container>
                    <Row>
                      <Col>
                      
                      <div style={{textAlign:"center"}}>
                          <h6><strong>{">>>> "}</strong>{comment.readerName}</h6>
                        </div>
            
                        
                      </Col>
                      <Col>
                        <div>
                          <p>{comment.comment}</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          );
        })
      ) : (
        <p>Comment Here</p>
      )}
    </>
  );
};
export default CommentList;
