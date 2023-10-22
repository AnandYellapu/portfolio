import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import {
  DiMongodb,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { SiExpress, SiMui } from "react-icons/si";

function ProjectCard(props) {
  const renderTechStackIcons = (techStack) => {
    if (!techStack) {
      return null;
    }

    return techStack.split(",").map((tech, index) => (
      <span key={index} className="tech-icon">
        {getTechIcon(tech.trim().toLowerCase())}
      </span>
    ));
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case "mongodb":
        return <DiMongodb title="MongoDB" />;
      case "express":
        return <SiExpress title="Express" />;
      case "react":
        return <DiReact title="React" />;
      case "nodejs":
        return <DiNodejsSmall title="Node.js" />;
      case "material-ui":
        return <SiMui title="Material-Ui" />;
      default:
        return null;
    }
  };

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
          <div className="d-flex justify-content-center tech-stack">
            {renderTechStackIcons(props.techStack)}
          </div>
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