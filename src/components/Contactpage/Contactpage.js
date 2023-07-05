import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'
import { GrLocationPin } from 'react-icons/gr'

function Contactpage() {
  return (
    <div className='contactbg'>
      <Container>
        <h2 className='contacthead'>Be In Touch</h2>
        <p className='contactparagraph'> "Are you looking for an experienced and skilled web developer for your team? Look no further! I'm a seasoned web developer actively seeking new opportunities to put my expertise to use.

Whether you need a website built from scratch or want to improve an existing one, I'm up for the task. From design to development and everything in between, I can handle it all.

If you're interested in learning more about my experience and skills, feel free to drop me a line. I'm always open to new opportunities and would love to hear from you. Let's work together to bring your web projects to life!"
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

export default Contactpage
