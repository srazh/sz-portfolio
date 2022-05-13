import * as React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function InterestCards(props) {
  return (
    <Card className="interest-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" width="200"/>
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank"className="download-button">
          {props.isBlog ? "View Blog" : "Check it out"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default InterestCards;
