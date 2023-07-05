import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { VscGithub } from "react-icons/vsc"
import { TfiTwitter } from "react-icons/tfi"
// import {bi bi }
import {RiInstagramFill} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homebg-ground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello</h2>
            <h2 className='nametext'>I'm Anand</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/AnandYellapu");
            }}
              className='socailmediabtn'><VscGithub className='icon' /></button>
            
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/yellapu-anandsai-38873b238/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            
            <button onClick={() => {
              window.open("https://twitter.com/ianand1200");
            }}
              className='socailmediabtn'><TfiTwitter className='icon'></TfiTwitter></button>
            
            <button onClick={() => {
              window.open("https://www.instagram.com/nanduu1200/");
            }}
              className='socailmediabtn'><RiInstagramFill className='icon' /></button>
          </Col>
           <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home

