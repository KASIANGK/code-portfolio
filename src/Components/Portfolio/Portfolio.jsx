import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import { useNavigate, Link } from 'react-router-dom'; 
import { useTheme } from '../../ThemeContext'; 
import './Portfolio.css';
import lightModeVideo from '../../assets/transition-ah.mp4';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
import PortfolioAll from './PortfolioAll';
import teamHoverImage from '../../assets/about.png';  // Remplace par le bon nom et extension
import playersHoverImage from '../../assets/about.png';  // Idem pour l'autre image


const Portfolio = () => {
  const { isLightMode } = useTheme();
  const navigate = useNavigate();
  
  const [isClicked, setIsClicked] = useState(false);

  const handleNavigateToHome = () => {
    navigate('/');
  };

  const handleIconClick = () => {
    setIsClicked(true); 
    setTimeout(() => {
      setIsClicked(false); 
    }, 300); 
    handleNavigateToHome(); 
  };


  
  return (
    <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div>
        <Swiper
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
                  <Link to="/team" className="portfolio-button"></Link>
                  {/* <div className="hover-image-first">
                    <img src={teamHoverImage} alt="Team Hover" />
                  </div> */}
                </div>
                <div className="buttons-container-second">
                  <Link to="/players" className="portfolio-button"></Link>
                  {/* <div className="hover-image-second">
                    <img src={playersHoverImage} alt="Players Hover" />
                  </div> */}
                </div>
              </div>
              <video
                className="main-video video-hey"
                autoPlay
                muted
              >
                <source src={lightModeVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioAll />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;





// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel"; 
// import { useNavigate, Link } from 'react-router-dom';  // Importation de Link
// import { useTheme } from '../../ThemeContext'; 
// import './Portfolio.css';
// import lightModeVideo from '../../assets/transition-ah.mp4';
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
// import PortfolioAll from './PortfolioAll';

// const Portfolio = () => {
//   const { isLightMode } = useTheme();
//   const navigate = useNavigate();
  
//   // État pour l'effet lumineux
//   const [isClicked, setIsClicked] = useState(false);

//   const handleNavigateToHome = () => {
//     navigate('/');
//   };

//   const handleIconClick = () => {
//     setIsClicked(true); // Activer l'effet lumineux
//     setTimeout(() => {
//       setIsClicked(false); // Désactiver après 300 ms
//     }, 300); // Durée de l'effet lumineux
//     handleNavigateToHome(); 
//   };

//   return (
//     <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div>
//         <Swiper
//           direction="vertical"  // Change la direction vers "vertical"
//           pagination={{ clickable: true }}
//           spaceBetween={7}
//           slidesPerView={1}
//           allowTouchMove={true} // Active le swipe par trackpad et tactile
//           navigation={false} 
//           mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
//           cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
//           modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
//         >
//           <SwiperSlide>
//             <div className="content-container">
//               <div className='btns-portfolio'>
//                 {/* Conteneur des boutons */}
//                 <div className="buttons-container-first">
//                   <Link to="/team" className="portfolio-button">Team</Link>
//                 </div>
//                 <div className="buttons-container-second">
//                   <Link to="/players" className="portfolio-button">Players</Link>
//                 </div>
//               </div>
//               <video
//                 className="main-video video-hey"
//                 autoPlay
//                 muted
//               >
//                 <source src={lightModeVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//               </video>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <PortfolioAll/>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;







// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel"; 
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../../ThemeContext'; 
// import './Portfolio.css';
// import lightModeVideo from '../../assets/transition-ah.mp4';


// import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 
// import PortfolioAll from './PortfolioAll';

// const Portfolio = () => {
//   const { isLightMode } = useTheme();
//   const navigate = useNavigate();
  
//   // État pour l'effet lumineux
//   const [isClicked, setIsClicked] = useState(false);

//   const handleNavigateToHome = () => {
//     navigate('/');
//   };

//   const handleIconClick = () => {
//     setIsClicked(true); // Activer l'effet lumineux
//     setTimeout(() => {
//       setIsClicked(false); // Désactiver après 300 ms
//     }, 300); // Durée de l'effet lumineux
//     handleNavigateToHome(); 
//   };

//   return (
//     <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div>
//         <Swiper
//           direction="vertical"  // Change la direction vers "vertical"
//           pagination={{ clickable: true }}
//           spaceBetween={7}
//           slidesPerView={1}
//           allowTouchMove={true} // Active le swipe par trackpad et tactile
//           navigation={false} 
//           mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
//           cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
//           modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
//           // style={{ height: '100vh' }} 
//         >
//           <SwiperSlide>
//             <div className="content-container">
//               <video
//                 className="main-video video-hey"
//                 autoPlay
//                 muted
//               >
//                 <source src={lightModeVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//               </video>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             {/* <div className=''>
//               <video
//               className="main-video"
//               autoPlay
//               muted
//               >
//               <source src={lightModeVideoo} type="video/mp4" />
//               Votre navigateur ne supporte pas la balise vidéo.
//               </video>
//             </div> */}
//             <PortfolioAll/>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../../ThemeContext'; // Importer le hook
// import './Portfolio.css';
// import lightModeVideo from '../../assets/videotest.mp4';


// const Portfolio = () => {
//   const { isLightMode } = useTheme();
//   const navigate = useNavigate();
  
//   // État pour l'effet lumineux
//   const [isClicked, setIsClicked] = useState(false);

//   const handleNavigateToHome = () => {
//     navigate('/'); // Naviguer vers la page principale (Home)
//   };

//   const handleIconClick = () => {
//     setIsClicked(true); // Activer l'effet lumineux
//     setTimeout(() => {
//       setIsClicked(false); // Désactiver après 300 ms
//     }, 300); // Durée de l'effet lumineux
//     handleNavigateToHome(); // Naviguer vers Home
//   };

//   return (
//     <div className={`home-homebis ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div className="content-container">
//         {/* <div className="column">
//           <h2>Contenu du Slide 2</h2>
//           <p>Voici le deuxième slide avec du contenu additionnel.</p>
//         </div>

//         <div className="column">
//           <p>Un autre contenu dans le deuxième slide.</p>
//         </div> */}
//         <div className="video-container">
//             <video
//             className="main-video"
//             autoPlay
//             muted
//             >
//                 <source src={lightModeVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//             </video>
//         </div>

//         {/* Bouton (icône) pour naviguer vers la page Home */}
//         {/* <i 
//           className={`fas fa-arrow-left navigate-icon-homebis ${isClicked ? 'clicked' : ''}`} 
//           onClick={handleIconClick}
//         ></i> */}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import "./HomeBis.css";

// const HomeBis = () => {
//   const navigate = useNavigate();
//   const { isLightMode } = useTheme();

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/'); // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Slide vide car ce slide est utilisé pour revenir à Home */}
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-div columns-container">
//             <div className="column">
//               <h2>Contenu du Slide 2</h2>
//               <p>Voici le deuxième slide avec du contenu additionnel.</p>
//             </div>

//             <div className="column">
//               <p>Un autre contenu dans le deuxième slide.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeBis;




// ok sauf darmode mais ok 
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import "./HomeBis.css";

// const HomeBis = () => {
//   const navigate = useNavigate();
//   const { isLightMode } = useTheme();

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/'); // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Slide vide car ce slide est utilisé pour revenir à Home */}
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-div columns-container">
//             <div className="column">
//               <h2>Contenu du Slide 2</h2>
//               <p>Voici le deuxième slide avec du contenu additionnel.</p>
//             </div>

//             <div className="column">
//               <p>Un autre contenu dans le deuxième slide.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeBis;


