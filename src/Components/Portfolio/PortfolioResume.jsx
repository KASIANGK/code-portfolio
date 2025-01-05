import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import xpData from '../../data/xp.json';  // Import your JSON file
import './PortfolioResume.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; 
import lightModeVideo from '/assets/switchpp.mp4';
import lightModeVideobis from '/assets/all.mp4';


function PortfolioResume() {
  const [loading, setLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const { isLightMode } = useTheme();

  // Function to handle video end and show the cards
  const handleVideoEnd = () => {
    setLoading(false);  // Hide loading state
    setShowCards(true); // Show the cards after the video ends
  };

  return (
    <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div className="content-container-portfolio">
        <div className="video-container portfolio-haut">
          <video
            className="main-video"
            autoPlay
            muted
            onEnded={handleVideoEnd} // Trigger when video ends
          >
            <source src={lightModeVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>

          {/* Display cards over the video after the video ends */}
          {showCards && (
            <div className="cards-container-cv">
              {xpData.cards.map((card, index) => (
                <div key={index} className="card-cv">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="media-container">
                    {card.media.map((item, idx) => (
                      <div key={idx} className="media-item">
                        {item.type === "video" && (
                          <video controls>
                            <source src='/assets/8.mp4' type="video/mp4" />
                          </video>
                        )}
                        {item.type === "pdf" && (
                          <div>
                            <a href={item.src} target="_blank" download={item.downloadable}>
                              {item.downloadable ? "Download PDF" : "View PDF"}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioResume;



// ok
// import React, { useEffect, useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel"; 
// import lightModeVideo from '../../assets/switchpp.mp4';
// import lightModeVideobis from '../../assets/all.mp4';

// import './PortfolioResume.css';
// import { useTheme } from '../../ThemeContext'; 
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; 


// function PortfolioResume() {
//   const [loading, setLoading] = useState(false);
//   const { isLightMode } = useTheme();
//   return (
//     <div className={`portfolio ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div className="content-container-portfolio">
//             <div className="video-container portfolio-haut">
//               <video
//                 className="main-video"
//                 autoPlay
//                 muted
//               >
//                 <source src={lightModeVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//               </video>
//             </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioResume;



