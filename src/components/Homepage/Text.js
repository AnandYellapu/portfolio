import React, { useRef } from 'react';
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  const typewriterRef = useRef(null);

  const handleClick = () => {
    typewriterRef.current.stop();
    setTimeout(() => {
      typewriterRef.current.start();
    }, 2000);
  };

  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Full Stack Web Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
        }}
        onInit={(typewriter) => {
          typewriterRef.current = typewriter;
        }}
      />
      <button onClick={handleClick} className="typewriter-btn">Stop Typing</button>
    </div>
  )
}

export default Text;

