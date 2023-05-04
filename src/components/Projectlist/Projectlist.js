import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import crypto from '../../Assets/crypto.jpg'
import nft from '../../Assets/nft.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="dash-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
                imgPath={nft}
                isBlog={false}
                title="Nft"
                description="An NFT (Non-Fungible Token) exchange is a platform that allows users to buy, sell, and trade NFTs. NFTs are unique digital assets that are verified on a blockchain, which means they cannot be replicated or duplicated. NFT exchanges provide a marketplace for artists, collectors."
                ghLink="https://react-nft99.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
