// // // import React from 'react';
// // // import { motion, useTransform, useScroll } from 'framer-motion';
// // // import '../../pages/style.css';
// // // import ProjectCard from "./ProjectCard";
// // // import { Container, Row, Col } from 'react-bootstrap';
// // // import food from '../../Assets/food.png';
// // // import blog from '../../Assets/blog.png';
// // // import hotel from '../../Assets/hotel.png';
// // // import ebook from '../../Assets/ebook.png';

// // // function Projectlist() {
// // //   const { scrollYProgress } = useScroll();

// // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
// // //   const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

// // //   return (
// // //     <div className="projectbackground">
// // //       <Container fluid className="dash-section">
// // //         <Container>
// // //           <Row style={{ justifyContent: "center", paddingBottom: "40px", marginTop: "57px" }}>
           
// // //             <Col md={4} className="dash-card">
// // //               <motion.div style={{ opacity, x }}>
// // //                 <ProjectCard
// // //                   imgPath={food}
// // //                   isBlog={false}
// // //                   title="Food Recipe"
// // //                   description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice..."
// // //                   techStack="MongoDB,Express,React,NodeJS"
// // //                   netlifyLink="https://kitchen-recipe-management1.netlify.app/"
// // //                 />
// // //               </motion.div>
// // //             </Col>

            
// // //             <Col md={4} className="dash-card">
// // //               <motion.div style={{ opacity, x }}>
// // //                 <ProjectCard
// // //                   imgPath={blog}
// // //                   isBlog={false}
// // //                   title="MixBlog"
// // //                   description="Mix blog project is a modern and versatile platform designed for seamless content creation..."
// // //                   techStack="MongoDB,Express,React,NodeJS"
// // //                   netlifyLink="https://mixbloog.netlify.app"
// // //                 />
// // //               </motion.div>
// // //             </Col>

// // //             <Col md={4} className="dash-card">
// // //               <motion.div style={{ opacity, x }}>
// // //                 <ProjectCard
// // //                   imgPath={hotel}
// // //                   isBlog={false}
// // //                   title="Ebooking"
// // //                   description="Ebooking project is a comprehensive solution for managing hotel reservations...."
// // //                   techStack="MongoDB,Express,React,NodeJS"
// // //                   netlifyLink="https://eboooking.netlify.app"
// // //                 />
// // //               </motion.div>
// // //             </Col>

// // //             <Col md={4} className="dash-card">
// // //             <motion.div style={{ opacity, x }}>
// // //               <ProjectCard
// // //                 imgPath={ebook}
// // //                 isBlog={false}
// // //                 title="Ebook"
// // //                 description="An Ebook Selling is an online platform designed to provide a convenient and user-friendly."
// // //                 techStack="MongoDB,Express,React,NodeJS,Material-UI"
// // //                 netlifyLink="https://eboook.netlify.app"
// // //               />
// // //             </motion.div>
// // //           </Col>

// // //           </Row>
// // //         </Container>
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default Projectlist;





// // import React from 'react';
// // import '../../pages/style.css';
// // import ProjectCard from "./ProjectCard";
// // import { Container, Row, Col } from 'react-bootstrap';
// // import food from '../../Assets/food.png';
// // import blog from '../../Assets/blog.png';
// // import hotel from '../../Assets/hotel.png';
// // import ebook from '../../Assets/ebook.png';
// // import tic from '../../Assets/tic.png';
// // import note from '../../Assets/note.png';
// // import lms from '../../Assets/lms.png';
// // import url from '../../Assets/url.png';

// // function Projectlist() {
// //   return (
// //     <div className="projectbackground">
// //       <Container fluid className="dash-section">
// //         <Container>
// //           <Row style={{ justifyContent: "center" }}>
           
// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={food}
// //                 isBlog={false}
// //                 title="Food Recipe"
// //                 description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice..."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://kitchen-recipe-management1.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/kitchen-recipe-frontend"
// //               />
// //             </Col>

// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={blog}
// //                 isBlog={false}
// //                 title="MixBlog"
// //                 description="Mix blog project is a modern and versatile platform designed for seamless content creation..."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://mixbloog.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/blog-fe"
// //               />
// //             </Col>

// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={hotel}
// //                 isBlog={false}
// //                 title="Ebooking"
// //                 description="Ebooking project is a comprehensive solution for managing hotel reservations...."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://eboooking.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/Ebooking-fe"
// //               />
// //             </Col>

// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={ebook}
// //                 isBlog={false}
// //                 title="Ebook"
// //                 description="An Ebook Selling is an online platform designed to provide a convenient and user-friendly."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://eboook.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/Ebook-fe"
// //               />
// //             </Col>


// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={tic}
// //                 isBlog={false}
// //                 title="Tic-Tac-Toe"
// //                 description="This project showcases a modern and interactive Tic-Tac-Toe game built using MERN."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://game12-tic-tac-toe.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/tic-tac-toe-client"
// //               />
// //             </Col>

// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={note}
// //                 isBlog={false}
// //                 title="Note Maker"
// //                 description="Note Maker is your go-to platform for creating and managing notes effortlessly built using MERN."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://notes-maker12.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/Note-fe"
// //               />
// //             </Col>


// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={lms}
// //                 isBlog={false}
// //                 title="Leave Management"
// //                 description="LMS is a software designed to managing employee leaves created using MERN."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://leave-management-systm.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/LMS-FE"
// //               />
// //             </Col>

// //             <Col md={4} className="dash-card">
// //               <ProjectCard
// //                 imgPath={url}
// //                 isBlog={false}
// //                 title="URL Shortener"
// //                 description="URL Shortener is used to create Long URL into Short URL which is created using MERN."
// //                 techStack="MongoDB, Express, React, NodeJS, Material-UI"
// //                 netlifyLink="https://url-shorteneer.netlify.app/"
// //                 ghLink="https://github.com/AnandYellapu/url-fe"
// //               />
// //             </Col>

// //           </Row>
// //         </Container>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Projectlist;







// import React from 'react';
// import '../../pages/style.css';
// import ProjectCard from './ProjectCard';
// import { Container, Row, Col } from 'react-bootstrap';
// import { motion } from 'framer-motion';

// import food from '../../Assets/food.png';
// import blog from '../../Assets/blog.png';
// import hotel from '../../Assets/hotel.png';
// import ebook from '../../Assets/ebook.png';
// import tic from '../../Assets/tic.png';
// import note from '../../Assets/note.png';
// import lms from '../../Assets/lms.png';
// import url from '../../Assets/url.png';

// const projects = [
//   {
//     title: "Food Recipe",
//     description: "Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice...",
//     imgPath: food,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://kitchen-recipe-management1.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/kitchen-recipe-frontend"
//   },
//   {
//     title: "MixBlog",
//     description: "Mix blog project is a modern and versatile platform designed for seamless content creation...",
//     imgPath: blog,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://mixbloog.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/blog-fe"
//   },
//   {
//     title: "Ebooking",
//     description: "Ebooking project is a comprehensive solution for managing hotel reservations....",
//     imgPath: hotel,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://eboooking.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/Ebooking-fe"
//   },
//   {
//     title: "Ebook",
//     description: "An Ebook Selling is an online platform designed to provide a convenient and user-friendly.",
//     imgPath: ebook,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://eboook.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/Ebook-fe"
//   },
//   {
//     title: "Tic-Tac-Toe",
//     description: "This project showcases a modern and interactive Tic-Tac-Toe game built using MERN.",
//     imgPath: tic,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://game12-tic-tac-toe.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/tic-tac-toe-client"
//   },
//   {
//     title: "Note Maker",
//     description: "Note Maker is your go-to platform for creating and managing notes effortlessly built using MERN.",
//     imgPath: note,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://notes-maker12.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/Note-fe"
//   },
//   {
//     title: "Leave Management",
//     description: "LMS is a software designed to managing employee leaves created using MERN.",
//     imgPath: lms,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://leave-management-systm.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/LMS-FE"
//   },
//   {
//     title: "URL Shortener",
//     description: "URL Shortener is used to create Long URL into Short URL which is created using MERN.",
//     imgPath: url,
//     techStack: "MongoDB, Express, React, NodeJS, Material-UI",
//     netlifyLink: "https://url-shorteneer.netlify.app/",
//     ghLink: "https://github.com/AnandYellapu/url-fe"
//   },
// ];

// function Projectlist() {
//   return (
//     <div className="projectbackground">
//       <Container fluid className="dash-section py-5">
//         <Container>
//           <motion.h2 
//             className="text-center mb-4 text-white fw-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             🚀 My Featured Projects
//           </motion.h2>
          
//           <Row className="justify-content-center">
//             {projects.map((project, index) => (
//               <Col key={index} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className="w-100"
//                 >
//                   <ProjectCard {...project} />
//                 </motion.div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }

// export default Projectlist;













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

