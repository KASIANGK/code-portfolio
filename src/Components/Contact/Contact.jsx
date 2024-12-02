import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'; 
import darkModeVideo from '../../assets/desktopOGG.mp4';
import lightModeVideo from '../../assets/Automatic.mp4';
import { useTheme } from '../../ThemeContext'; 

import linkedinIcon from '/src/assets/linkk.png';  // Changez ces imports avec vos images
import mailIcon from '/src/assets/mail.png'; 
import phoneIcon from '/src/assets/phone.png';

function Contact() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null); 
  const { isLightMode } = useTheme();
  
  const [showMailPopup, setShowMailPopup] = useState(false);
  const [email, setEmail] = useState('votre.email@example.com'); // Remplacez par votre propre adresse email

  const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

  const handleMailClick = () => {
    setShowMailPopup(true);
  };

  const handleClosePopup = () => {
    setShowMailPopup(false);
  };

  const handleSendMail = () => {
    window.location.href = `mailto:${email}`;
    setShowMailPopup(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const video = videoRef.current;

      // Obtenir les dimensions de la section
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      // Position actuelle de la section par rapport à la fenêtre
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Si la section est visible dans la fenêtre
      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        // Calcul du pourcentage de défilement dans la section
        const progress = Math.min(
          Math.max((window.innerHeight - sectionTop) / (sectionHeight + window.innerHeight), 0),
          1
        );

        // Ajuster la lecture de la vidéo en fonction du pourcentage
        // Progression de la vidéo en fonction du défilement
        video.currentTime = progress * video.duration;
      }
    };

    // Ajouter l'écouteur de scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyage à la destruction du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="contact-section">
      <video
        ref={videoRef}
        className="main-video video-hey video-ctc"
        muted
        playsInline
      >
        <source src={currentVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      {/* Div pour les icônes */}
      <div className="contact-buttons">
        <button onClick={() => window.open('https://www.linkedin.com', '_blank')}>
          <img src={linkedinIcon} alt="LinkedIn" />
        </button>
        <button onClick={handleMailClick}>
          <img src={mailIcon} alt="Email" />
        </button>
        <button onClick={() => window.location.href = 'tel:+1234567890'}>
          <img src={phoneIcon} alt="Phone" />
        </button>
      </div>

      {/* Popup pour l'email */}
      {showMailPopup && (
        <div className="mail-popup">
          <div className="popup-content">
            <h3>Envoyer un email</h3>
            <p>Adresse email: {email}</p>
            <button onClick={handleSendMail}>Envoyer un mail</button>
            <button onClick={handleClosePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;




// import React, { useEffect, useRef } from 'react';
// import './Contact.css'; 
// import darkModeVideo from '../../assets/desktopOGG.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { useTheme } from '../../ThemeContext'; 

// function Contact() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null); 
//   const { isLightMode } = useTheme();

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!videoRef.current || !sectionRef.current) return;

//       const section = sectionRef.current;
//       const video = videoRef.current;

//       // Obtenir les dimensions de la section
//       const rect = section.getBoundingClientRect();
//       const sectionHeight = rect.height;

//       // Position actuelle de la section par rapport à la fenêtre
//       const sectionTop = rect.top;
//       const sectionBottom = rect.bottom;

//       // Si la section est visible dans la fenêtre
//       if (sectionTop < window.innerHeight && sectionBottom > 0) {
//         // Calcul du pourcentage de défilement dans la section
//         const progress = Math.min(
//           Math.max((window.innerHeight - sectionTop) / (sectionHeight + window.innerHeight), 0),
//           1
//         );

//         // Ajuster la lecture de la vidéo en fonction du pourcentage
//         // Progression de la vidéo en fonction du défilement
//         video.currentTime = progress * video.duration;
//       }
//     };

//     // Ajouter l'écouteur de scroll
//     window.addEventListener('scroll', handleScroll);

//     // Nettoyage à la destruction du composant
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="contact-section">
//       <video
//         ref={videoRef}
//         className="main-video video-hey video-ctc"
//         muted
//         playsInline
//       >
//         <source src={currentVideo} type="video/mp4" />
//         Votre navigateur ne supporte pas la balise vidéo.
//       </video>
//     </div>
//   );
// }

// export default Contact;







// import React, { useEffect, useRef } from 'react';
// import './Contact.css'; 
// import darkModeVideo from '../../assets/desktop.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { useTheme } from '../../ThemeContext'; 

// function Contact() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null); 
//   const { isLightMode } = useTheme();

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!videoRef.current || !sectionRef.current) return;

//       const section = sectionRef.current;
//       const video = videoRef.current;

//       // Dimensions de la section
//       const rect = section.getBoundingClientRect();
//       const sectionHeight = rect.height;

//       // Position actuelle de la section par rapport à la fenêtre
//       const sectionTop = rect.top;
//       const sectionBottom = rect.bottom;

//       // Si la section est visible
//       if (sectionBottom > 0 && sectionTop < window.innerHeight) {
//         // Calcul du pourcentage de défilement dans la section
//         const progress = Math.min(
//           Math.max((window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight), 0),
//           1
//         );

//         // Ajuste la lecture de la vidéo en fonction de ce pourcentage
//         video.currentTime = progress * video.duration;
//       }
//     };

//     // Ajout de l'écouteur de scroll
//     window.addEventListener('scroll', handleScroll);

//     // Nettoyage à la destruction du composant
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="contact-section">
//       <video
//         ref={videoRef}
//         className="main-video video-hey"
//         muted
//         playsInline
//       >
//         <source src={currentVideo} type="video/mp4" />
//         Votre navigateur ne supporte pas la balise vidéo.
//       </video>
//     </div>
//   );
// }

// export default Contact;







// import React, { useEffect, useRef, useState } from 'react';

// import './Contact.css'; 
// // import darkModeVideo from '../../assets/homeVideo.mp4';
// import darkModeVideo from '../../assets/mainc.mp4';


// import lightModeVideo from '../../assets/Automatic.mp4';
// import { useTheme } from '../../ThemeContext'; 

// function Contact() {

//   const [videoTime, setVideoTime] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const videoRef = useRef(null);
//   const { isLightMode } = useTheme();

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   // Charger la vidéo à chaque changement de thème
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   }, [currentVideo]);

//   return (
//     <div className=''>
//     {loading && <div className="loading">Loading...</div>}
//     <video
//       ref={videoRef}
//       className="main-video video-hey"
//       autoPlay
//       muted
//       onTimeUpdate={() => {
//         if (videoRef.current) {
//           setVideoTime(videoRef.current.currentTime);
//         }
//       }}
//     >
//       <source src={currentVideo} type="video/mp4" />
//       Votre navigateur ne supporte pas la balise vidéo.
//     </video>
//   </div>
//   );
// }

// export default Contact;