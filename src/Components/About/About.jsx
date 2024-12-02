import React, { useEffect, useRef, useState } from 'react';
import lightModeVideooo from '../../assets/abb.mp4';

import './About.css';
import { useTheme } from '../../ThemeContext'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
import Players from '../Players/Players';

function About() {
  const [loading, setLoading] = useState(false);
  const { isLightMode } = useTheme();


  return (
    <div className={`about ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div>
        <Swiper
          direction="vertical"  
          pagination={{ clickable: true }}
          spaceBetween={7}
          slidesPerView={1}
          allowTouchMove={true} // Active le swipe par trackpad et tactile
          navigation={false} 
          mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
          cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
          modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
          // style={{ height: '100vh' }} 
        >
          <SwiperSlide>
            <div className="content-container">
              <video
                className="main-video video-about video-hey"
                autoPlay
                muted
              >
                <source src={lightModeVideooo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="about-all">
              <Players></Players>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default About;


// import React, { useEffect, useRef, useState } from 'react';
// // import lightModeVideooo from '../../assets/about.mp4';
// import lightModeVideooo from '../../assets/ab.mp4';

// import './About.css';
// import { useTheme } from '../../ThemeContext'; 


// function About() {
//   const [loading, setLoading] = useState(false);
//   const { isLightMode } = useTheme();


//   return (
//     <div className={`home-homebis ${isLightMode ? 'light-mode' : 'dark-mode'}`}>

//         <div className=''>
//             {loading && <div className="loading">Loading...</div>}
//             <video
//             className="main-video video-about"
//             autoPlay
//             muted
//             >
//             <source src={lightModeVideooo} type="video/mp4" />
//             Votre navigateur ne supporte pas la balise vidéo.
//             </video>
//         </div>
//     </div>
//   );
// }

// export default About;
