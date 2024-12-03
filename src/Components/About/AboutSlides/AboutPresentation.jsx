import React, { useState, useRef } from 'react';
import './AboutPresentation.css';
import { useTheme } from '../../../ThemeContext';

function AboutPresentation() {
  const { isLightMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);  // État pour gérer le survol
  const aboutRef = useRef(null);  // Référence à la section complète

  // Fonction pour vérifier si la souris quitte la zone de l'image ou de la présentation
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={aboutRef}
      className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`}
      onMouseEnter={handleMouseEnter}  // Déclenche l'apparition de la div
      onMouseLeave={handleMouseLeave}   // Déclenche la disparition de la div
    >
      <div className='div-360'>
        <img src='/src/assets/about.png' alt='About' className='image-about' />
      </div>
      <div className='presentation'>
        <h1>HEY</h1>
        <p>I'm Kasia</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias repellat id odit? Eos, eligendi. Nostrum architecto voluptatum corporis nesciunt, fugiat, assumenda odit labore ex delectus, libero sed voluptatem deserunt!</p>
      </div>
      {/* La div glissante qui apparaît lors du survol */}
      <div className={`sliding-div ${isHovered ? 'active' : ''}`}>
        <h2>Additional Information</h2>
        <p>Here comes the sliding content!</p>
      </div>
    </div>
  );
}

export default AboutPresentation;




// import React, { useState } from 'react';
// import './AboutPresentation.css';
// import { useTheme } from '../../../ThemeContext';

// function AboutPresentation() {
//   const { isLightMode } = useTheme();
//   const [isHovered, setIsHovered] = useState(false);  // Ajout d'un état pour gérer le survol

//   return (
//     <div className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`} 
//          onMouseEnter={() => setIsHovered(true)}  // Quand la souris entre dans la div
//          onMouseLeave={() => setIsHovered(false)}>  
//         <div className='div-360'>
//             <img src='/src/assets/about.png' alt='About' className='image-about' />
//         </div>
//         <div className='presentation'>
//             <h1>HEY</h1>
//             <p>I'm Kasia</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias repellat id odit? Eos, eligendi. Nostrum architecto voluptatum corporis nesciunt, fugiat, assumenda odit labore ex delectus, libero sed voluptatem deserunt!</p>
//         </div>
//         {/* Gliding div that appears when hovered */}
//         <div className={`sliding-div ${isHovered ? 'active' : ''}`}>
//             <h2>Additional Information</h2>
//             <p>Here comes the sliding content!</p>
//         </div>
//     </div>
//   );
// }

// export default AboutPresentation;


// import React, { useEffect, useRef, useState } from 'react';

// import './AboutPresentation.css';
// import { useTheme } from '../../../ThemeContext';
// // import { useTheme } from '../../ThemeContext'; 
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel"; 
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 

// function AboutPresentation() {
//   const [loading, setLoading] = useState(false);
//   const { isLightMode } = useTheme();


//   return (
//     <div className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//         <div className='div-360'>
//         </div>
//         <div className='presentation'>
//             <h1>HEY</h1>
//             <p>I'm Kasia</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias repellat id odit? Eos, eligendi. Nostrum architecto voluptatum corporis nesciunt, fugiat, assumenda odit labore ex delectus, libero sed voluptatem deserunt!</p>
//         </div>
//     </div>
//   );
// }

// export default AboutPresentation;