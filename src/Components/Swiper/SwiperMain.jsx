import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import HomeVideo from './SwiperComponents/HomeVideo';
import Portfolio from './SwiperComponents/Portfolio';
import About from './SwiperComponents/About'
import './SwiperMain.css';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 

function SwiperMain() {
  return (
    <div className="content-containerr">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={7}
        slidesPerView={1}
        allowTouchMove={true} // active le swipe par trackpad et tactile
        navigation={false} 
        mousewheel={true} // ajoute la gestion des gestes trackpad et molette
        cssMode={true} // ajoute la compatibilite avec le scroll natif du navigateur
        modules={[Navigation, Pagination, Mousewheel]} // ajouter Mousewheel ici
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
