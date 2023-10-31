// import React from 'react';
// import { motion, useTransform, useScroll } from 'framer-motion';
// import '../../pages/style.css';
// import ProjectCard from "./ProjectCard";
// import { Container, Row, Col } from 'react-bootstrap';
// import food from '../../Assets/food.png';
// import blog from '../../Assets/blog.png';
// import hotel from '../../Assets/hotel.png';
// import ebook from '../../Assets/ebook.png';

// function Projectlist() {
//   const { scrollYProgress } = useScroll();

//   const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
//   const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

//   return (
//     <div className="projectbackground">
//       <Container fluid className="dash-section">
//         <Container>
//           <Row style={{ justifyContent: "center", paddingBottom: "40px", marginTop: "57px" }}>
           
//             <Col md={4} className="dash-card">
//               <motion.div style={{ opacity, x }}>
//                 <ProjectCard
//                   imgPath={food}
//                   isBlog={false}
//                   title="Food Recipe"
//                   description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice..."
//                   techStack="MongoDB,Express,React,NodeJS"
//                   netlifyLink="https://kitchen-recipe-management1.netlify.app/"
//                 />
//               </motion.div>
//             </Col>

            
//             <Col md={4} className="dash-card">
//               <motion.div style={{ opacity, x }}>
//                 <ProjectCard
//                   imgPath={blog}
//                   isBlog={false}
//                   title="MixBlog"
//                   description="Mix blog project is a modern and versatile platform designed for seamless content creation..."
//                   techStack="MongoDB,Express,React,NodeJS"
//                   netlifyLink="https://mixbloog.netlify.app"
//                 />
//               </motion.div>
//             </Col>

//             <Col md={4} className="dash-card">
//               <motion.div style={{ opacity, x }}>
//                 <ProjectCard
//                   imgPath={hotel}
//                   isBlog={false}
//                   title="Ebooking"
//                   description="Ebooking project is a comprehensive solution for managing hotel reservations...."
//                   techStack="MongoDB,Express,React,NodeJS"
//                   netlifyLink="https://eboooking.netlify.app"
//                 />
//               </motion.div>
//             </Col>

//             <Col md={4} className="dash-card">
//             <motion.div style={{ opacity, x }}>
//               <ProjectCard
//                 imgPath={ebook}
//                 isBlog={false}
//                 title="Ebook"
//                 description="An Ebook Selling is an online platform designed to provide a convenient and user-friendly."
//                 techStack="MongoDB,Express,React,NodeJS,Material-UI"
//                 netlifyLink="https://eboook.netlify.app"
//               />
//             </motion.div>
//           </Col>

//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }

// export default Projectlist;





import React from 'react';
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import food from '../../Assets/food.png';
import blog from '../../Assets/blog.png';
import hotel from '../../Assets/hotel.png';
import ebook from '../../Assets/ebook.png';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="dash-section">
        <Container>
          <Row style={{ justifyContent: "center" }}>
           
            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={food}
                isBlog={false}
                title="Food Recipe"
                description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice..."
                techStack="MongoDB, Express, React, NodeJS"
                netlifyLink="https://kitchen-recipe-management1.netlify.app/"
                ghLink="https://github.com/AnandYellapu/kitchen-recipe-frontend"
              />
            </Col>

            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="MixBlog"
                description="Mix blog project is a modern and versatile platform designed for seamless content creation..."
                techStack="MongoDB, Express, React, NodeJS"
                netlifyLink="https://mixbloog.netlify.app/"
                ghLink="https://github.com/AnandYellapu/blog-fe"
              />
            </Col>

            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={hotel}
                isBlog={false}
                title="Ebooking"
                description="Ebooking project is a comprehensive solution for managing hotel reservations...."
                techStack="MongoDB, Express, React, NodeJS"
                netlifyLink="https://eboooking.netlify.app/"
                ghLink="https://github.com/AnandYellapu/Ebooking-fe"
              />
            </Col>

            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={ebook}
                isBlog={false}
                title="Ebook"
                description="An Ebook Selling is an online platform designed to provide a convenient and user-friendly."
                techStack="MongoDB, Express, React, NodeJS, Material-UI"
                netlifyLink="https://eboook.netlify.app/"
                ghLink="https://github.com/AnandYellapu/Ebook-fe"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;
