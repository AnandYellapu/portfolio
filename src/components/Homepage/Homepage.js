// import React from 'react';
// import '../../pages/style.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import Text from '../Homepage/Text';
// import { VscGithub } from 'react-icons/vsc';
// import { FaLinkedinIn } from 'react-icons/fa';
// import 'animate.css';

// function Home() {
//   const googleDriveResumeLink = 'https://drive.google.com/file/d/1DDQyt8NPvm9krlI6Q1UrYOb3MAvFj3Mx/view';  //eslint-disable-line

//   return (
//     <div className='homebg-ground animate__animated animate__zoomIn'>
//       <Container>
//         <Row>
//           <Col md={7}>
//             <h2 className='headtext'>Hello</h2>
//             <h2 className='nametext'>I'm Anand</h2>
//             <span className='underline'></span>
//             <Text />
//             <div className='social-media-buttons'>
//               <button
//                 onClick={() => {
//                   window.open('https://github.com/AnandYellapu', '_blank', 'noopener,noreferrer');
//                 }}
//                 className='social-media-btn'
//               >
//                 <VscGithub className='icon github-color' />
//               </button>

//               <button
//                 onClick={() => {
//                   window.open(
//                     'https://www.linkedin.com/in/yellapu-anandsai-38873b238/',
//                     '_blank',
//                     'noopener,noreferrer'
//                   );
//                 }}
//                 className='social-media-btn'
//               >
//                 <FaLinkedinIn className='icon linkedin-color' />
//               </button>
//             </div>

//             {/* Resume Button - Uncomment if needed */}
//             {/* 
//             <button
//               className='view-resume-button'
//               onClick={() => {
//                 window.open(googleDriveResumeLink, '_blank', 'noopener,noreferrer');
//               }}
//             >
//               View My Resume
//             </button>
//             */}
//           </Col>

//           <Col md={5}>
//             <div className='imagedeveloper'></div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Home;








import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../Homepage/Text';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import 'animate.css';

function Home() {
  return (
    <div className='homebg-ground animate__animated animate__zoomIn'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello</h2>
            <h2 className='nametext'>I'm Anand</h2>
            <span className='underline'></span>
            <Text />
            <div className='social-media-buttons'>
              <button
                onClick={() => {
                  window.open('https://github.com/AnandYellapu', '_blank', 'noopener,noreferrer');
                }}
                className='social-media-btn'
              >
                <VscGithub className='icon github-color' />
              </button>

              <button
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/yellapu-anandsai-38873b238/',
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                className='social-media-btn'
              >
                <FaLinkedinIn className='icon linkedin-color' />
              </button>
            </div>
          </Col>

          <Col md={5}>
            <div className='imagedeveloper'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
