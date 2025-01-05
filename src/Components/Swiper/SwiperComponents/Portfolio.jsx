import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import { Link } from 'react-router-dom'; 
import { useTheme } from '../../../ThemeContext'; 
import './Portfolio.css';
import lightModeVideo from '/src/assets/transition-ah.mp4';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
import PortfolioResume from '../../Portfolio/PortfolioResume';
import teamHoverImage from '/assets/about.png';  
import playersHoverImage from '/assets/about.png';  

const Portfolio = () => {
  const { isLightMode } = useTheme();
  const swiperRef = useRef(null);  // creer une reference pour Swiper
  const [isClicked, setIsClicked] = useState(false);

  // fonction pour naviguer vers le slide suivant
  const handleNavigateToPortfolioResume = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();  // defiler vers le bas
    }
  };

  return (
    <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div>
        <Swiper
          ref={swiperRef}  
          direction="vertical" 
          pagination={{ clickable: true }}
          spaceBetween={7}
          slidesPerView={1}
          allowTouchMove={true}
          navigation={false} 
          mousewheel={true} 
          cssMode={true} 
          modules={[Navigation, Pagination, Mousewheel]} 
        >
          <SwiperSlide>
            <div className="content-container">
              <div className='btns-portfolio'>
                <div className="buttons-container-first">
                  {/* lien qui va activer le swipe vers le bas */}
                  <button onClick={handleNavigateToPortfolioResume} className="portfolio-button"></button>
                </div>
                <div className="buttons-container-second">
                  <Link to="/portfolio-all" className="portfolio-button"></Link>
                </div>
              </div>
              <video
                className="main-video main-video-portfolio"
                autoPlay
                muted
              >
                <source src={lightModeVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioResume />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;



