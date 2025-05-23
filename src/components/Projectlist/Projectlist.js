import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import ProjectCard from './ProjectCard';

import '../../pages/style.css';
import food from '../../Assets/food.png';
import blog from '../../Assets/blog.png';
import hotel from '../../Assets/hotel.png';
import ebook from '../../Assets/ebook.png';
import tic from '../../Assets/tic.png';
import note from '../../Assets/note.png';
import lms from '../../Assets/lms.png';
import url from '../../Assets/url.png';

const projects = [
  {
    title: "Food Recipe",
    description: "Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice...",
    imgPath: food,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://kitchen-recipe-management1.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/kitchen-recipe-frontend"
  },
  {
    title: "MixBlog",
    description: "Mix blog project is a modern and versatile platform designed for seamless content creation...",
    imgPath: blog,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://mixbloog.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/blog-fe"
  },
  {
    title: "Ebooking",
    description: "Ebooking project is a comprehensive solution for managing hotel reservations....",
    imgPath: hotel,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://eboooking.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/Ebooking-fe"
  },
  {
    title: "Ebook",
    description: "An Ebook Selling is an online platform designed to provide a convenient and user-friendly.",
    imgPath: ebook,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://eboook.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/Ebook-fe"
  },
  {
    title: "Tic-Tac-Toe",
    description: "This project showcases a modern and interactive Tic-Tac-Toe game built using MERN.",
    imgPath: tic,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://game12-tic-tac-toe.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/tic-tac-toe-client"
  },
  {
    title: "Note Maker",
    description: "Note Maker is your go-to platform for creating and managing notes effortlessly built using MERN.",
    imgPath: note,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://notes-maker12.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/Note-fe"
  },
  {
    title: "Leave Management",
    description: "LMS is a software designed to managing employee leaves created using MERN.",
    imgPath: lms,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://leave-management-systm.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/LMS-FE"
  },
  {
    title: "URL Shortener",
    description: "URL Shortener is used to create Long URL into Short URL which is created using MERN.",
    imgPath: url,
    techStack: "MongoDB, Express, React, NodeJS, Material-UI",
    netlifyLink: "https://url-shorteneer.netlify.app/",
    ghLink: "https://github.com/AnandYellapu/url-fe"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="dash-section py-5">
        <Container>
          <motion.h2 
            className="text-center fw-bold mb-5 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            aria-label="Featured Projects Section"
          >
            🚀 Explore My Projects
          </motion.h2>

          <motion.div
            className="project-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <Row className="g-4 justify-content-center">
              {projects.map((project, idx) => (
                <Col key={idx} md={6} lg={4} className="d-flex align-items-stretch">
                  <motion.div variants={itemVariants} className="w-100">
                    <LazyLoad height={200} offset={100} once>
                      <ProjectCard {...project} />
                    </LazyLoad>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;

