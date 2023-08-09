import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'
import { GrLocationPin } from 'react-icons/gr'

function Contactpage() {
  return (
    <div className='contactbg'>
      <Container>
        <h2 className='contacthead'>Be In Touch</h2>
        <p className='contactparagraph'> "Are you in search of a fresh and enthusiastic web developer to join your team? Your search ends here! As an aspiring web developer, I am eagerly seeking opportunities to apply my newly acquired skills. Whether you're looking to create a brand-new website or enhance an existing one, I'm excited to contribute. From crafting designs to coding and all that falls in between, count me in. If you're curious about my capabilities and experiences, please don't hesitate to reach out. I am keen on exploring new avenues and would greatly appreciate the chance to connect. Let's collaborate to breathe life into your web projects!"
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
