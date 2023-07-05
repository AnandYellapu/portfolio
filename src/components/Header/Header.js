import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../pages/style.css';

function Header() {
    const [navColour, setNavColour] = useState(false);
    const [expand, setExpand] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 20) {
          setNavColour(true);
        } else {
          setNavColour(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const toggleExpand = () => {
      setExpand(!expand);
    };
  
    const closeExpand = () => {
      setExpand(false);
    };
  
    return (
      <Navbar
        className={navColour ? 'sticky' : 'navbar'}
        fixed="top"
        expand="md"
        expanded={expand}
      >
      <Navbar.Brand as={Link} to="/">
    </Navbar.Brand>
      <Navbar.Toggle onClick={toggleExpand}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="responsive-navbar">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeExpand}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeExpand}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeExpand}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={closeExpand}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Header;