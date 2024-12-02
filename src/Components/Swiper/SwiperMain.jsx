import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; // Importer le style de mousewheel
import HomeVideo from '../Home/HomeVideo';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About'
import './SwiperMain.css';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; // Ajouter Mousewheel ici

function SwiperMain() {
  return (
    <div className="content-container">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={7}
        slidesPerView={1}
        allowTouchMove={true} // Active le swipe par trackpad et tactile
        navigation={false} 
        mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
        cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
        modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
      >
        <SwiperSlide>
          <HomeVideo />
        </SwiperSlide>

        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          < About/>
        </SwiperSlide>
        </Swiper>

    </div>
  );
}

export default SwiperMain;
