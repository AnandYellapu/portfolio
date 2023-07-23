import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import crypto from '../../Assets/crypto.jpg'
import food from '../../Assets/food.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="dash-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "40px", marginTop:"57px" }}>
            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={crypto}
                isBlog={false}
                title="CoinDex"
                description="A cryptocurrency exchange is a digital marketplace where users can buy, sell, and trade cryptocurrencies such as Bitcoin, Ethereum, and many others. These exchanges allow individuals to exchange one cryptocurrency for another or exchange fiat currency (e.g., USD, EUR) for cryptocurrencies."
                ghLink="https://myweb3.netlify.app/"
              />
            </Col>

            <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={food}
                isBlog={false}
                title="Food Recipe"
                description="Flavorful Eats is a delightful and user-friendly food recipe app designed to inspire both novice and seasoned cooks to explore new flavors and create delicious meals. Whether you're a passionate home cook or a busy professional looking for quick and easy recipes, Flavorful Eats has you covered."
                ghLink="https://kitchen-recipe-management1.netlify.app/"
              />
            </Col>

                  <Col md={4} className="dash-card">
              <ProjectCard
                imgPath={food}
                isBlog={false}
                title="URL SHORTENER"
                description="A URL shortener is a web service or application that converts long and cumbersome URLs (Uniform Resource Locators) into shorter and more manageable ones. The primary purpose of a URL shortener is to create concise and shareable links that are easier to remember, share, and use."
                ghLink="https://url-shorteneer.netlify.app"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
