import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
    return (
      <Card className="card-card">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className="btn p-2 m-3 h-5 w-100" variant="btn btn-outline-success" href={props.ghLink} target="_blank">
              View
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  

export default ProjectCard;
