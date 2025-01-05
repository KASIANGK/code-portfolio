import React, { useEffect, useRef, useState } from 'react';
// import lightModeVideooo from '/src/assets/abb.mp4';
import lightModeVideooo from '/src/assets/aboutgrain.mp4';

import './About.css';
import { useTheme } from '../../../ThemeContext'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
import Players from '../../Portfolio/PortfolioAll';
import AboutPresentation from '../../About/AboutSlides/AboutPresentation';
import AboutSkills from '../../About/AboutSlides/AboutSkills'

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
          allowTouchMove={true} // active le swipe par trackpad et tactile
          navigation={false} 
          mousewheel={true} // ajoute la gestion des gestes trackpad et molette
          cssMode={true} // ajoute la compatibilite avec le scroll natif du navigateur
          modules={[Navigation, Pagination, Mousewheel]} // ajouter Mousewheel ici
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
              {/* <Players></Players> */}
              <AboutPresentation></AboutPresentation>
          </SwiperSlide>
          {/* <SwiperSlide>
              <AboutSkills></AboutSkills>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default About;

