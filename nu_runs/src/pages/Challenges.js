import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import Loader from "react-loader-spinner";
import ChallengeCard from "../components/ChallengeCard";
import { Jumbotron } from "react-bootstrap";

const ChallengesPage = () => {
  const [newChallenges, setNewChallenges] = useState([]);

  const [challengesLoaded, setChallengesLoadee] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/api/challenges");
    if (result) {
      setChallengesLoadee(true);
    }
    const newChallenges = result.data;
    setNewChallenges(newChallenges);
  };

  return (
    <>
      <Jumbotron style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ padding: "20px" }}>Challenges</h1>

        {challengesLoaded ? (
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
        ) : (
          <Loader
            type="Puff"
            color="#284B63"
            height={100}
            width={100}
            timeout={5000} //5 secs
          />
        )}
      </Jumbotron>
    </>
  );
};

export default ChallengesPage;
