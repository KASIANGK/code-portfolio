import React, { useState, useRef } from 'react';
import './AboutPresentation.css';
import { useTheme } from '../../../ThemeContext';

function AboutPresentation() {
  const { isLightMode } = useTheme();
  
  // États pour gérer les survols des différentes divs
  const [isHovered360, setIsHovered360] = useState(false);
  const [isHoveredPresentation, setIsHoveredPresentation] = useState(false);

  // Fonction pour gérer l'activation des animations de survol
  const handleMouseEnter360 = () => setIsHovered360(true);
  const handleMouseLeave360 = () => setIsHovered360(false);

  const handleMouseEnterPresentation = () => setIsHoveredPresentation(true);
  const handleMouseLeavePresentation = () => setIsHoveredPresentation(false);

  return (
    <div
      className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`}
    >
      <div
        className='div-360'
        onMouseEnter={handleMouseEnter360}
        onMouseLeave={handleMouseLeave360}
      >
        <img src='/src/assets/about.png' alt='About' className='image-about' />
      </div>
      <div
        className='presentation'
        onMouseEnter={handleMouseEnterPresentation}
        onMouseLeave={handleMouseLeavePresentation}
      >
        <h1>HEY</h1>
        <p>I'm Kasia</p>
        <p>Imagine a graphic designer and 3D artist who, after mastering the art of bringing ideas to life visually, decided to conquer the world of code. 👩‍💻</p>
      </div>

      {/* Div glissante de gauche à droite pour .div-360 */}
      <div className={`sliding-div sliding-div-left ${isHovered360 ? 'active' : ''}`}>
        <div className='img-about-360'>
          <img src='/src/assets/bitmoji.png' alt='About' className='image-about-360' />
        </div>
        <div className='presentation-360'>
          <p></p>
          <p>Thanks to an intensive training, I gained strong programming skills, which allowed me to collaborate on various projects where creativity and technology meet to bring innovative solutions to life.</p>
        </div>
      </div>

      {/* Div glissante de droite à gauche pour .presentation */}
      <div className={`sliding-div sliding-div-right ${isHoveredPresentation ? 'active' : ''}`}>
        <div className='txt-about'>
          <img src='/src/assets/bitmoji.png' alt='About' className='image-about-txt' />
        </div>
        <div className='txt-presentation'>
          <p></p>
          <p>I also had the opportunity to coach the talents of tomorrow, guiding young developers in merging their passion for code with their creativity. Through this experience, I not only strengthened my technical skills but also gained valuable expertise in mentorship and project management, while contributing to the creation of unique projects.</p>
          <p>Let’s make innovation happen! 🚀🙌</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPresentation;





// import React, { useState, useRef } from 'react';
// import './AboutPresentation.css';
// import { useTheme } from '../../../ThemeContext';

// function AboutPresentation() {
//   const { isLightMode } = useTheme();
//   const [isHovered, setIsHovered] = useState(false);  // État pour gérer le survol
//   const aboutRef = useRef(null);  // Référence à la section complète

//   // Fonction pour vérifier si la souris quitte la zone de l'image ou de la présentation
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <div
//       ref={aboutRef}
//       className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`}
//       onMouseEnter={handleMouseEnter}  // Déclenche l'apparition de la div
//       onMouseLeave={handleMouseLeave}   // Déclenche la disparition de la div
//     >
//       <div className='div-360'>
//         <img src='/src/assets/about.png' alt='About' className='image-about' />
//       </div>
//       <div className='presentation'>
//         <h1>HEY</h1>
//         <p>I'm Kasia</p>
//         <p>Imagine a graphic designer and 3D artist who, after mastering the art of bringing ideas to life visually, decided to conquer the world of code. 👩‍💻</p>
//       </div>
//       {/* La div glissante qui apparaît lors du survol */}
//       <div className={`sliding-div ${isHovered ? 'active' : ''}`}>
//         <h2>Additional Information</h2>
//         <p>Here comes the sliding content!</p>
//       </div>
//     </div>
//   );
// }

// export default AboutPresentation;

