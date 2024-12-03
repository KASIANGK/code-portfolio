import React, { useEffect, useState } from 'react';
import './AboutPresentation.css';
import { useTheme } from '../../../ThemeContext';

function AboutPresentation() {
  const { isLightMode } = useTheme();
  
  return (
    <div className={`about-presentation ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
        <div className='div-360'>
            <img src='/src/assets/about.png' alt='About' className='image-about' />
        </div>
        <div className='presentation'>
            <h1>HEY</h1>
            <p>I'm Kasia</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias repellat id odit? Eos, eligendi. Nostrum architecto voluptatum corporis nesciunt, fugiat, assumenda odit labore ex delectus, libero sed voluptatem deserunt!</p>
        </div>
        {/* Gliding div that appears when hovered */}
        <div className='sliding-div'>
            <h2>Additional Information</h2>
            <p>Here comes the sliding content!</p>
        </div>
    </div>
  );
}

export default AboutPresentation;



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