// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import '../../pages/style.css';
// import ProjectCard from "./ProjectCard";
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaBitcoin, FaUtensils, FaLink } from 'react-icons/fa'; // Import icons
// import crypto from '../../Assets/crypto.jpg';
// import food from '../../Assets/food.png';
// import url from '../../Assets/url.png';

// function Projectlist() {
//   return (
//     <div className="projectbackground">
//       <Container fluid className="dash-section">
//         <Container>
//           <Row style={{ justifyContent: "center", paddingBottom: "40px", marginTop: "57px" }}>
//             <Col>
//               <VerticalTimeline>
//                 <VerticalTimelineElement
//                   className="vertical-timeline-element--work"
//                   iconStyle={{ background: '#ffae42', color: '#fff' }}
//                   icon={<FaBitcoin />} // Add icon here
//                 >
//                   <ProjectCard
//                     imgPath={crypto}
//                     isBlog={false}
//                     title="CoinDex"
//                     description="A cryptocurrency exchange is a digital marketplace..."
//                     ghLink="https://myweb3.netlify.app/"
//                   />
//                 </VerticalTimelineElement>

//                 <VerticalTimelineElement
//                   className="vertical-timeline-element--work"
//                   iconStyle={{ background: 'rgb(60, 179, 113)', color: '#fff' }}
//                   icon={<FaUtensils />} // Add icon here
//                 >
//                   <ProjectCard
//                     imgPath={food}
//                     isBlog={false}
//                     title="Food Recipe"
//                     description="Flavorful Eats is a delightful and user-friendly..."
//                     ghLink="https://kitchen-recipe-management1.netlify.app/"
//                   />
//                 </VerticalTimelineElement>

//                 <VerticalTimelineElement
//                   className="vertical-timeline-element--work"
//                   iconStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}
//                   icon={<FaLink />} // Add icon here
//                 >
//                   <ProjectCard
//                     imgPath={url}
//                     isBlog={false}
//                     title="URL SHORTENER"
//                     description="A URL shortener is a web service or application..."
//                     ghLink="https://url-shorteneer.netlify.app"
//                   />
//                 </VerticalTimelineElement>
//               </VerticalTimeline>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }

// export default Projectlist;




import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import crypto from '../../Assets/crypto.jpg';
import food from '../../Assets/food.png';
import url from '../../Assets/url.png';

function Projectlist() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div className="projectbackground">
      <Container fluid className="dash-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "40px", marginTop: "57px" }}>
            <Col md={4} className="dash-card">
              <motion.div style={{ opacity, x }}>
                <ProjectCard
                  imgPath={crypto}
                  isBlog={false}
                  title="CoinDex"
                  description="A cryptocurrency exchange is a digital marketplace where users can buy, sell, and trade cryptocurrencies..."
                  ghLink="https://myweb3.netlify.app/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="dash-card">
              <motion.div style={{ opacity, x }}>
                <ProjectCard
                  imgPath={food}
                  isBlog={false}
                  title="Food Recipe"
                  description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice..."
                  ghLink="https://kitchen-recipe-management1.netlify.app/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="dash-card">
              <motion.div style={{ opacity, x }}>
                <ProjectCard
                  imgPath={url}
                  isBlog={false}
                  title="URL SHORTENER"
                  description="A URL shortener is a web service or application that converts long and cumbersome URLs..."
                  ghLink="https://url-shorteneer.netlify.app"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;