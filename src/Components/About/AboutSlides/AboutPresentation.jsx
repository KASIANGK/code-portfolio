import React, { useState, useRef } from 'react';
import './AboutPresentation.css';
import { useTheme } from '../../../ThemeContext';

function AboutPresentation() {
  const { isLightMode } = useTheme();
  
  // gerer les survols des differentes divs
  const [isHovered360, setIsHovered360] = useState(false);
  const [isHoveredPresentation, setIsHoveredPresentation] = useState(false);

  // activation des animations en hover
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
        <img src='/assets/ab1.png' alt='About' className='image-about' />
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

      {/* div glissante de gauche a droite */}
      <div className={`sliding-div sliding-div-left second-presentation ${isHovered360 ? 'active' : ''}`}>
        <div className='img-about-360'>
          <img src='/assets/ab2.png' alt='About' className='image-about' />
        </div>
        <div className='presentation-360'>
          <p></p>
          <p>Thanks to an intensive training, I gained strong programming skills, which allowed me to collaborate on various projects where creativity and technology meet to bring innovative solutions to life.</p>
        </div>
      </div>

      {/* div glissante de droite a gauche */}
      <div className={`sliding-div sliding-div-right ${isHoveredPresentation ? 'active' : ''}`}>
        <div className='txt-about'>
          <img src='/assets/ab3.png' alt='About' className='image-about' />
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