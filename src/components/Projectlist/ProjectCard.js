// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import Button from "react-bootstrap/Button";
// // import { motion } from "framer-motion";
// // import {
// //   DiMongodb,
// //   DiReact,
// //   DiNodejsSmall,
// // } from "react-icons/di";
// // import { SiExpress, SiMui } from "react-icons/si";

// // function ProjectCard(props) {
// //   const renderTechStackIcons = (techStack) => {
// //     if (!techStack) {
// //       return null;
// //     }

// //     return techStack.split(",").map((tech, index) => (
// //       <span key={index} className="tech-icon">
// //         {getTechIcon(tech.trim().toLowerCase())}
// //       </span>
// //     ));
// //   };

// //   const getTechIcon = (tech) => {
// //     switch (tech) {
// //       case "mongodb":
// //         return <DiMongodb title="MongoDB" />;
// //       case "express":
// //         return <SiExpress title="Express" />;
// //       case "react":
// //         return <DiReact title="React" />;
// //       case "nodejs":
// //         return <DiNodejsSmall title="Node.js" />;
// //       case "material-ui":
// //         return <SiMui title="Material-Ui" />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="card-card"
// //     >
// //       <Card>
// //         <Card.Img variant="top" src={props.imgPath} alt="card-img" />
// //         <Card.Body className="d-flex flex-column">
// //           <Card.Title>{props.title}</Card.Title>
// //           <Card.Text>{props.description}</Card.Text>
// //           <div className="d-flex justify-content-center tech-stack">
// //             {renderTechStackIcons(props.techStack)}
// //           </div>
// //           <div className="d-flex justify-content-center">
// //             <Button
// //               className="btn p-200 m-9 h-5 w-100"
// //               variant="btn btn-outline-success"
// //               href={props.ghLink}
// //               target="_blank"
// //             >
// //               View
// //             </Button>
// //           </div>
// //         </Card.Body>
// //       </Card>
// //     </motion.div>
// //   );
// // }

// // export default ProjectCard;



// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import Button from "react-bootstrap/Button";
// // import { motion } from "framer-motion";
// // import {
// //   DiMongodb,
// //   DiReact,
// //   DiNodejsSmall,
// // } from "react-icons/di";
// // import { SiExpress, SiMui } from "react-icons/si";
// // import { FaGithub } from 'react-icons/fa';

// // function ProjectCard(props) {
// //   const renderTechStackIcons = (techStack) => {
// //     if (!techStack) {
// //       return null;
// //     }

// //     return techStack.split(",").map((tech, index) => (
// //       <span key={index} className="tech-icon">
// //         {getTechIcon(tech.trim().toLowerCase())}
// //       </span>
// //     ));
// //   };

// //   const getTechIcon = (tech) => {
// //     switch (tech) {
// //       case "mongodb":
// //         return <DiMongodb title="MongoDB" />;
// //       case "express":
// //         return <SiExpress title="Express" />;
// //       case "react":
// //         return <DiReact title="React" />;
// //       case "nodejs":
// //         return <DiNodejsSmall title="Node.js" />;
// //       case "material-ui":
// //         return <SiMui title="Material-Ui" />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="card-card"
// //     >
// //       <Card>
// //         <Card.Img variant="top" src={props.imgPath} alt="card-img" />
// //         <Card.Body className="d-flex flex-column">
// //           <Card.Title>{props.title}</Card.Title>
// //           <Card.Text>{props.description}</Card.Text>
// // <h5 className="tech-stack-title text-center">Tech Stack Used</h5>
// //           <div className="d-flex justify-content-center tech-stack">
// //             {renderTechStackIcons(props.techStack)}
// //           </div>
// //           <div className="d-flex justify-content-center">
// //             <Button
// //               className="btn p-200 m-9 h-5 w-100 me-md-2"
// //               variant="btn btn-outline-success"
// //               href={props.netlifyLink}
// //               target="_blank"
// //             >
// //               View
// //             </Button>
// //             <Button
// //               className="btn p-200 m-9 h-5 w-100 ml-5" // Add margin to create a small gap
// //               variant="btn btn-outline-dark"
// //               href={props.ghLink}
// //               target="_blank"
// //             >
// //               <FaGithub />
// //             </Button>
// //           </div>
// //         </Card.Body>
// //       </Card>
// //     </motion.div>
// //   );
// // }

// // export default ProjectCard;










// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { motion } from "framer-motion";
// import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";
// import { SiExpress, SiMui } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";

// // Define a default placeholder image
// const placeholderImg = "path/to/placeholder/image.png";

// function ProjectCard({ imgPath, title, description, techStack, netlifyLink, ghLink }) {
//   const techIcons = {
//     mongodb: <DiMongodb title="MongoDB" />,
//     express: <SiExpress title="Express" />,
//     react: <DiReact title="React" />,
//     nodejs: <DiNodejsSmall title="Node.js" />,
//     "material-ui": <SiMui title="Material-UI" />,
//   };

//   // Renders tech stack icons with tooltips
//   const renderTechStackIcons = () =>
//     techStack?.split(",").map((tech, index) => (
//       <motion.span 
//         key={index} 
//         whileHover={{ scale: 1.1 }} 
//         className="tech-icon" 
//         title={tech.trim()}
//       >
//         {techIcons[tech.trim().toLowerCase()] || null}
//       </motion.span>
//     ));

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="project-card"
//     >
//       <Card className="h-100 shadow-lg">
//         <Card.Img
//           variant="top"
//           src={imgPath || placeholderImg}
//           alt={`${title} preview`}
//           className="card-img"
//           onError={(e) => (e.target.src = placeholderImg)}
//         />
//         <Card.Body className="d-flex flex-column">
//           <Card.Title className="text-center">{title}</Card.Title>
//           <Card.Text className="card-description text-muted">{description}</Card.Text>

//           {/* Tech Stack Title */}
//           <h5 className="tech-stack-title text-center">Tech Stack Used</h5>
//           <div className="d-flex justify-content-center flex-wrap tech-stack">
//             {renderTechStackIcons()}
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-auto d-flex justify-content-between">
//             <Button
//               className="view-button w-50 me-2"
//               variant="outline-success"
//               href={netlifyLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={`View ${title} live`}
//             >
//               Link
//             </Button>
//             <Button
//               className="github-button w-50"
//               variant="outline-dark"
//               href={ghLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={`View ${title} on GitHub`}
//             >
//               <FaGithub />
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Styling */}
//       <style jsx>{`
//         .card-img {
//           transition: transform 0.3s ease;
//         }
//         .card-img:hover {
//           transform: scale(1.05);
//         }
//         .view-button, .github-button {
//           transition: background-color 0.3s ease, transform 0.3s ease;
//         }
//         .view-button:hover {
//           background-color: #28a745;
//           color: white;
//           transform: scale(1.05);
//         }
//         .github-button:hover {
//           background-color: #343a40;
//           color: white;
//           transform: scale(1.05);
//         }
//         .tech-stack-title {
//           font-weight: 600;
//           margin-top: 1rem;
//           color: #333;
//         }
//         .tech-stack .tech-icon {
//           font-size: 1.5rem;
//           margin: 0.2rem;
//           color: #333;
//         }
//       `}</style>
//     </motion.div>
//   );
// }

// export default ProjectCard;
















// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";
// import { SiExpress, SiMui } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

// const placeholderImg = "path/to/placeholder/image.png";

// function ProjectCard({ imgPath, title, description, techStack, netlifyLink, ghLink }) {
//   const techIcons = {
//     mongodb: <DiMongodb />,
//     express: <SiExpress />,
//     react: <DiReact />,
//     nodejs: <DiNodejsSmall />,
//     "material-ui": <SiMui />,
//   };

//   const renderTechStackIcons = () =>
//     techStack?.split(",").map((tech, index) => {
//       const trimmedTech = tech.trim().toLowerCase();
//       return (
//         <OverlayTrigger
//           key={index}
//           placement="top"
//           overlay={<Tooltip>{tech.trim()}</Tooltip>}
//         >
//           <motion.span whileHover={{ scale: 1.3 }} className="tech-icon me-2">
//             {techIcons[trimmedTech] || <span>{tech.trim()}</span>}
//           </motion.span>
//         </OverlayTrigger>
//       );
//     });

//   return (
//     <Tilt
//       glareEnable
//       glareMaxOpacity={0.25}
//       scale={1.02}
//       tiltMaxAngleX={10}
//       tiltMaxAngleY={10}
//       transitionSpeed={2000}
//       className="tilt-card"
//     >
//       <motion.div
//         whileHover={{ scale: 1.015 }}
//         whileTap={{ scale: 0.98 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="glass-card"
//       >
//         <Card className="h-100 border-0">
//           <Card.Img
//             variant="top"
//             src={imgPath || placeholderImg}
//             alt={`${title} preview`}
//             className="card-img-top"
//             onError={(e) => (e.target.src = placeholderImg)}
//           />
//           <Card.Body className="d-flex flex-column">
//             <Card.Title className="text-center fw-bold fs-5">{title}</Card.Title>
//             <Card.Text className="text-muted">{description}</Card.Text>

//             <h6 className="mt-3 text-center text-secondary">Tech Stack</h6>
//             <div className="d-flex justify-content-center flex-wrap">{renderTechStackIcons()}</div>

//             <div className="mt-auto d-flex gap-2">
//               <Button
//                 className="w-50"
//                 variant="outline-success"
//                 href={netlifyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Link
//               </Button>
//               <Button
//                 className="w-50"
//                 variant="outline-dark"
//                 href={ghLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </motion.div>

//       <style jsx>{`
//         .glass-card {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 20px;
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
//           backdrop-filter: blur(12px);
//           padding: 10px;
//           height: 100%;
//           transition: all 0.3s ease;
//         }

//         .card-img-top {
//           object-fit: cover;
//           height: 180px;
//           border-radius: 12px;
//           transition: transform 0.3s ease;
//         }

//         .card-img-top:hover {
//           transform: scale(1.05);
//         }

//         .tech-icon {
//           font-size: 1.4rem;
//           color: #333;
//         }

//         .tilt-card {
//           height: 100%;
//         }

//         @media (max-width: 576px) {
//           .card-img-top {
//             height: 140px;
//           }
//         }
//       `}</style>
//     </Tilt>
//       <Card>
//         <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//         <Card.Body className="d-flex flex-column">
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text>{props.description}</Card.Text>
//           <div className="d-flex justify-content-center tech-stack">
//             {renderTechStackIcons(props.techStack)}
//           </div>
//           <div className="d-flex justify-content-center">
//             <Button
//               className="btn p-200 m-9 h-5 w-100 me-md-2"
//               variant="btn btn-outline-success"
//               href={props.netlifyLink}
//               target="_blank"
//             >
//               Link
//             </Button>
//             <Button
//               className="btn p-200 m-9 h-5 w-100 ml-5" // Add margin to create a small gap
//               variant="btn btn-outline-dark"
//               href={props.ghLink}
//               target="_blank"
//             >
//               <FaGithub />
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </motion.div>
//   );
// }

// export default ProjectCard;






import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";
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
    <Tilt
      glareEnable
      glareMaxOpacity={0.25}
      scale={1.02}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={2000}
      className="tilt-card"
    >
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card"
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
      </motion.div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          padding: 10px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .card-img-top {
          object-fit: cover;
          height: 180px;
          border-radius: 12px;
          transition: transform 0.3s ease;
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
    </Tilt>
  );
}

export default ProjectCard;
