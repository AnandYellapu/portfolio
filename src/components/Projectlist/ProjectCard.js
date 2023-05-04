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
            <Button className="btn p-9" variant="primary" href={props.ghLink} target="_blank">
              View
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  }
  

export default ProjectCard;
