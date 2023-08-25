import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

function ProjectCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-card"
    >
      <Card>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button
              className="btn p-200 m-9 h-5 w-100"
              variant="btn btn-outline-success"
              href={props.ghLink}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;



