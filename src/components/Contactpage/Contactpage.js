import React from 'react';
import { motion } from 'framer-motion';
import '../../pages/style.css';
import { Container } from 'react-bootstrap';
import { GrLocationPin } from 'react-icons/gr';

function Contactpage() {
  const backInRightAnimation = {
    initial: { y: 500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: 'backIn' },
  };

  return (
    <div className='contactbg'>
      <Container>
        <motion.h2 className='contacthead' {...backInRightAnimation}>
          Be In Touch
        </motion.h2>
        <motion.p className='contactparagraph' {...backInRightAnimation}>
          "Need a web developer? That's me! I'm ready to help with new websites or improvements. I can design, code, and more.
          Let's team up and make your web projects awesome!"
        </motion.p>
        <motion.button
          className='contactbtn'
          onClick={() => {
            window.open('mailto:anandsaiii1200@gmail.com');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          {...backInRightAnimation}
        >
          Say Hello
        </motion.button>
        <motion.div
          className='line'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
        />
        <motion.p className='copyright'>
          <GrLocationPin /> © 2023. <br />
          Built by{' '}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: 'easeInOut' }}
          >
            @Anand
          </motion.span>
        </motion.p>
      </Container>
    </div>
  );
}

export default Contactpage;
