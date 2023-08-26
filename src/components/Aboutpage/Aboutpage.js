import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiReact, SiMongodb, SiMysql } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import '../../pages/style.css';

function Aboutpage() {
  const skillsAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 800 },
  });

  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h3 className='aboutmetext'>
              About <span>Me</span>
            </h3>
            <p className='aboutdetails'>
              I'm a Full Stack Developer. I enjoy creating websites that people like to use. I'm learning code day by day
              and focusing on making code easy to understand.
            </p>
            <ul className='skilllist'>
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <animated.li style={skillsAnimation}>
                    <FaHtml5 className='icon-html' />HTML5
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <FaCss3Alt className='icon-css' />CSS3
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <FaJs className='icon-js' />JavaScript
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <FaBootstrap className='icon-bootstrap' />Bootstrap5
                  </animated.li>
                </Col>
                <Col md={5}>
                  <animated.li style={skillsAnimation}>
                    <SiReact className='icon-react' />React Js
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <DiNodejs className='icon-node' />Node Js
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <SiMongodb className='icon-mongodb' />Mongo DB
                  </animated.li>
                  <animated.li style={skillsAnimation}>
                    <SiMysql className='icon-mysql' />MySQL
                  </animated.li>
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