import React, { useState } from "react";
import { Carousel, CarouselItem, Card } from "react-bootstrap";
import nuruns1 from "../assets/nuruns1.jpeg";
import nuruns2 from "../assets/nuruns2.jpeg";
import nuruns3 from "../assets/nuruns3.jpeg";
import nuruns4 from "../assets/nuruns4.jpeg";
import nuruns5 from "../assets/nuruns5.jpeg";
import nuruns6 from "../assets/nuruns6.jpeg";
import nuruns7 from "../assets/nuruns7.jpeg";
import nuruns8 from "../assets/nuruns8.jpeg";
import nuruns9 from "../assets/nuruns9.jpeg";
import nuruns10 from "../assets/nuruns10.jpeg";

import "../css/lowersection.css";

function LowerSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="examples">
      <h1>Some memories we made together</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="justify-content-center"
      >
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img className="templateItem" variant="top" src={nuruns1} />
              <Card.Body>
                <Card.Title>Caption 1</Card.Title>
                <Card.Text>First Run</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img className="templateItem" variant="top" src={nuruns2} />
              <Card.Body>
                <Card.Title>Caption 2</Card.Title>
                <Card.Text>Yoga Sessions</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img className="templateItem" variant="top" src={nuruns3} />
              <Card.Body>
                <Card.Title>Caption 3</Card.Title>
                <Card.Text>Delhi Marathon</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img className="templateItem" variant="top" src={nuruns4} />
              <Card.Body>
                <Card.Title>Caption 4</Card.Title>
                <Card.Text>Cross Country</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img className="templateItem" variant="top" src={nuruns5} />
              <Card.Body>
                <Card.Title>Delhi Marathon 5</Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={nuruns6} className="templateItem" />
              <Card.Body>
                <Card.Title>Delhi Marathon </Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={nuruns7} className="templateItem" />
              <Card.Body>
                <Card.Title>Delhi Marathon </Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={nuruns8} className="templateItem" />
              <Card.Body>
                <Card.Title>Delhi Marathon </Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={nuruns9} className="templateItem" />
              <Card.Body>
                <Card.Title>Delhi Marathon </Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="d-flex justify-content-center w-100 h-100">
            <Card className="templateItem" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={nuruns10} className="templateItem" />
              <Card.Body>
                <Card.Title>Delhi Marathon </Card.Title>
                <Card.Text>Marathon Memories.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default LowerSection;
