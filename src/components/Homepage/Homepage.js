import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../Homepage/Text';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const googleDriveResumeLink = 'https://drive.google.com/file/d/1DDQyt8NPvm9krlI6Q1UrYOb3MAvFj3Mx/view';

  return (
    <div className='homebg-ground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello</h2>
            <h2 className='nametext'>I'm Anand</h2>
            <span className="underline"></span>
            <Text />
            <div className="social-media-buttons">
              <button
                onClick={() => {
                  window.open("https://github.com/AnandYellapu");
                }}
                className='social-media-btn'
              >
                <VscGithub className='icon github-color' />
              </button>

              <button
                onClick={() => {
                  window.open("https://www.linkedin.com/in/yellapu-anandsai-38873b238/");
                }}
                className='social-media-btn'
              >
                <FaLinkedinIn className='icon linkedin-color' />
              </button>
            </div>
             <button
              className="view-resume-button"
              onClick={() => {
                window.open(googleDriveResumeLink);
              }}
            >
              View My Resume
            </button>
          </Col>
          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
