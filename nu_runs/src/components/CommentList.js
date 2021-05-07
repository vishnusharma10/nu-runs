import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
      <h3 style={{ color: "#284B63" }}>Comments</h3>
      {comments !== undefined ? (
        comments.map((comment, key) => {
          return (
            <Row>
              <Col>
                <div key={key}>
                  <Container>
                    <Row style={{border:"1px dotted black",borderRadius:"20px",margin:"10px",padding:"5px"}}>
                      <Col style={{padding:"0px"}}>
                        <div style={{ textAlign: "center",padding:"0px"}}>
                          <h6 style={{ color: "#284B63" }}>
                            <strong>{key + 1 + ". "}</strong>
                            {comment.readerName}
                          </h6>
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
