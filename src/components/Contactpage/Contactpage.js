import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'
import { GrLocationPin } from 'react-icons/gr'

function Contactpage() {
  return (
    <div className='contactbg'>
      <Container>
        <h2 className='contacthead'>Be In Touch</h2>
        <p className='contactparagraph'> "Need a web developer? That's me! I'm ready to help with new websites or improvements. I can design, code, and more.Let's team up and make your web projects awesome!"
</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("mailto:anandsaiii1200@gmail.com");
          }}
        >Say Hello</button> 
        <span></span>
        <hr className='line' />
        <p className='copyright'>
          <GrLocationPin /> © 2023. <br /> Built by <span>@Anand</span></p>
      </Container>
      </div>
  )
}

export default Contactpage;
