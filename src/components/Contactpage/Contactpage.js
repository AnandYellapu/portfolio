import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbg'>
      <Container>
        <h2 className='contacthead'>Be In Touch</h2>
        <p className='contactparagraph'> I’m currently searching for opportunities as web developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("mailto:anandsaiii1200@outlook.com");
          }}
        >Say Hello</button> 
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> Built by <span>@Anand</span></p>
      </Container>
      </div>
  )
}

export default Contactpage
