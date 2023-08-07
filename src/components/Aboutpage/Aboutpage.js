import React from 'react';
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa'; // Import icons from React Icons
import { SiReact, SiMongodb, SiMysql } from 'react-icons/si'; // Import more icons
import { DiNodejs } from 'react-icons/di';

function Aboutpage() {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h3 className='aboutmetext'>
              About <span>Me</span>
            </h3>
            <p className='aboutdetails'>
              I am a Front End developer based in India with a passion for building websites that provide an exceptional user experience. I am a self-taught developer who values writing maintainable code and enjoys problem-solving. My focus is on creating responsive designs that are accessible to all users, regardless of the device they use. Additionally, I am interested in learning more about developing scalable distribution systems to enhance my skills further.
            </p>
            <ul className='skilllist'>
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>
                    <FaHtml5 className='icon-html' /> HTML5
                  </li>
                  <li>
                    <FaCss3Alt className='icon-css' /> CSS3
                  </li>
                  <li>
                    <FaJs className='icon-js' /> JavaScript
                  </li>
                  <li>
                    <FaBootstrap className='icon-bootstrap' /> Bootstrap 5
                  </li>
                </Col>
                <Col md={5}>
                  <li>
                    <SiReact className='icon-react' /> React Js
                  </li>
                  <li>
                    <DiNodejs className='icon-node' /> Node Js
                  </li>
                  <li>
                    <SiMongodb className='icon-mongodb' /> Mongo DB
                  </li>
                  <li>
                    <SiMysql className='icon-mysql' /> MySQL
                  </li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className='webimage'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
