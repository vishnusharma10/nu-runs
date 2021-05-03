import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";

import ChallengeCard from "../components/ChallengeCard";
import { Jumbotron } from "react-bootstrap";

const ChallengesPage = () => {


  const [newChallenges, setNewChallenges] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/api/challenges");
    const newChallenges = result.data;
    setNewChallenges(newChallenges);
    console.log(newChallenges);
  };



  return (
    <>
      <Jumbotron style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ padding: "20px" }}>Challenges</h1>
        <Row>
          <Col span={6}>
            {newChallenges.map((challenge, key) => {
              if (challenge !== null) {

                return (
                  <ChallengeCard
                    key={key}
                    challenge={challenge["img"]}
                    distance={challenge["distance"]}
                    challengeType={challenge["challengeType"]}
                    id={challenge["_id"]}
                  ></ChallengeCard>
                );
              } else {
                return <h1>No Challenge Found</h1>;
              }
            })}
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default ChallengesPage;
