
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiExpress, SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const placeholderImg = "path/to/placeholder/image.png";

function ProjectCard({ imgPath, title, description, techStack, netlifyLink, ghLink }) {
  const techIcons = {
    mongodb: <DiMongodb />,
    express: <SiExpress />,
    react: <DiReact />,
    nodejs: <DiNodejsSmall />,
    "material-ui": <SiMui />,
  };

  const renderTechStackIcons = () =>
    techStack?.split(",").map((tech, index) => {
      const trimmedTech = tech.trim().toLowerCase();
      return (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip>{tech.trim()}</Tooltip>}
        >
          <motion.span whileHover={{ scale: 1.3 }} className="tech-icon me-2">
            {techIcons[trimmedTech] || <span>{tech.trim()}</span>}
          </motion.span>
        </OverlayTrigger>
      );
    });

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card tilt-card"
    >
      <Card className="h-100 border-0">
        <Card.Img
          variant="top"
          src={imgPath || placeholderImg}
          alt={`${title} preview`}
          className="card-img-top"
          onError={(e) => (e.target.src = placeholderImg)}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center fw-bold fs-5">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>

          <h6 className="mt-3 text-center text-secondary">Tech Stack</h6>
          <div className="d-flex justify-content-center flex-wrap">
            {renderTechStackIcons()}
          </div>

          <div className="mt-auto d-flex gap-2">
            <Button
              className="w-50"
              variant="outline-success"
              href={netlifyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Button>
            <Button
              className="w-50"
              variant="outline-dark"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          padding: 10px;
          height: 100%;
        }

        .card-img-top {
          object-fit: cover;
          height: 180px;
          border-radius: 12px;
        }

        .card-img-top:hover {
          transform: scale(1.05);
        }

        .tech-icon {
          font-size: 1.4rem;
          color: #333;
        }

        .tilt-card {
          height: 100%;
        }

        @media (max-width: 576px) {
          .card-img-top {
            height: 140px;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default ProjectCard;
