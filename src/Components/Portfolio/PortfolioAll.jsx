import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import lightModeVideo from '../../assets/switchpp.mp4';
import lightModeVideobis from '../../assets/all.mp4';

import './PortfolioAll.css';
import { useTheme } from '../../ThemeContext'; 
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 


function PortfolioAll() {
  const [loading, setLoading] = useState(false);
  const { isLightMode } = useTheme();
  return (
    <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div className="content-container">
        <Swiper
          direction="horizontal"  
          pagination={{ clickable: true }}
          spaceBetween={7}
          slidesPerView={1}
          allowTouchMove={true} // Active le swipe par trackpad et tactile
          navigation={false} 
          mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
          cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
          modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
          style={{ height: '100vh' }} 
        >
          <SwiperSlide>
            <div className="video-container">
              <video
                className="main-video"
                autoPlay
                muted
              >
                <source src={lightModeVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="video-container-all">
                  <video
                    className="main-video-portfolio"
                    autoPlay
                    muted
                  >
                    <source src={lightModeVideobis} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PortfolioAll;


// import React, { useEffect, useRef, useState } from 'react';
// // import lightModeVideo from '../../assets/transition-p.mp4';
// import lightModeVideo from '../../assets/switchpp.mp4';

// import './PortfolioAll.css';
// import { useTheme } from '../../ThemeContext'; 


// function PortfolioAll() {
//   const [loading, setLoading] = useState(false);
//   const { isLightMode } = useTheme();


//   return (
//     <div className={`home-homebis ${isLightMode ? 'light-mode' : 'dark-mode'}`}>

//         <div className='portfolio-all'>
//             {loading && <div className="loading">Loading...</div>}
//             <video
//             className="main-video"
//             autoPlay
//             muted
//             >
//             <source src={lightModeVideo} type="video/mp4" />
//             Votre navigateur ne supporte pas la balise vidéo.
//             </video>
//         </div>
//     </div>
//   );
// }

// export default PortfolioAll;


