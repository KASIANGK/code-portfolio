// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel"; 
// import { useNavigate, Link } from 'react-router-dom'; 
// import { useTheme } from '../../../ThemeContext'; 
// import './Portfolio.css';
// import lightModeVideo from '/src/assets/transition-ah.mp4';
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
// import PortfolioResume from '../../Portfolio/PortfolioResume';
// import teamHoverImage from '/src/assets/about.png';  
// import playersHoverImage from '/src/assets/about.png';  

// const Portfolio = () => {
//   const { isLightMode } = useTheme();
//   const navigate = useNavigate();
  
//   const [isClicked, setIsClicked] = useState(false);
//   const [isVideoEnded, setIsVideoEnded] = useState(false); // Nouvel état pour gérer la fin de la vidéo

//   const handleNavigateToHome = () => {
//     navigate('/');
//   };

//   const handleIconClick = () => {
//     setIsClicked(true); 
//     setTimeout(() => {
//       setIsClicked(false); 
//     }, 300); 
//     handleNavigateToHome(); 
//   };

//   const handleVideoEnd = () => {
//     setIsVideoEnded(true); // Lancer l'état lorsque la vidéo est terminée
//   };

//   return (
//     <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div>
//         <Swiper
//           direction="vertical" 
//           pagination={{ clickable: true }}
//           spaceBetween={7}
//           slidesPerView={1}
//           allowTouchMove={true}
//           navigation={false} 
//           mousewheel={true} 
//           cssMode={true} 
//           modules={[Navigation, Pagination, Mousewheel]} 
//         >
//           <SwiperSlide>
//             <div className="content-container port-all-yo">
//               <div className='btns-portfolio'>
//                 <div className="buttons-container-first">
//                   <Link to="/general" className="portfolio-button"></Link>
//                 </div>
//                 <div className="buttons-container-second">
//                   <Link to="/portfolio-all" className="portfolio-button"></Link>
//                 </div>
//               </div>

//               {/* Vidéo */}
//               <video
//                 className="main-video main-video-portfolio"
//                 autoPlay
//                 muted
//                 onEnded={handleVideoEnd} // Détecter la fin de la vidéo
//               >
//                 <source src={lightModeVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//               </video>

//               {/* Images qui apparaissent lors du survol ou de la fin de la vidéo */}
//               <div className={`hover-image-first ${isVideoEnded ? 'show' : ''}`}>
//                 <img src={teamHoverImage} alt="Image sur hover" />
//               </div>
//               <div className={`hover-image-second ${isVideoEnded ? 'show' : ''}`}>
//                 <img src={playersHoverImage} alt="Image sur hover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <PortfolioResume />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



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
import teamHoverImage from '/src/assets/about.png';  // Remplace par le bon nom et extension
import playersHoverImage from '/src/assets/about.png';  // Idem pour l'autre image

const Portfolio = () => {
  const { isLightMode } = useTheme();
  const swiperRef = useRef(null);  // Créer une référence pour Swiper
  const [isClicked, setIsClicked] = useState(false);

  // Fonction pour naviguer vers le slide suivant
  const handleNavigateToPortfolioResume = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();  // Faites défiler vers le bas
    }
  };

  return (
    <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div>
        <Swiper
          ref={swiperRef}  // Référence Swiper
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
                  {/* Lien qui va activer le swipe vers le bas */}
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



