// import React, { useRef } from 'react';
// import '../../pages/style.css';
// import Typewriter from "typewriter-effect";

// function Text() {
//   const typewriterRef = useRef(null);

//   const handleClick = () => {
//     typewriterRef.current.stop();
//     setTimeout(() => {
//       typewriterRef.current.start();
//     }, 2000);
//   };

//   return (
//     <div className="typewriter-container">
//       <Typewriter
//         options={{
//           strings: [
//             "Web Developer", "Designer"
//           ],
//           autoStart: true,
//           loop: true,
//           deleteSpeed: 30,
//         }}
//         onInit={(typewriter) => {
//           typewriterRef.current = typewriter;
//         }}
//         className="typewriter-text" // Add class name to the typewriter text
//       />
//       <button onClick={handleClick} className="typewriter-btn">Typing</button>
//     </div>
//   )
// }

// export default Text;






import React, { useRef } from 'react';
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  const typewriterRef = useRef(null);

  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Web Developer", "Designer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
        }}
        onInit={(typewriter) => {
          typewriterRef.current = typewriter;
        }}
        className="typewriter-text"
      />
    </div>
  )
}

export default Text;

