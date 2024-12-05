import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'; 
import darkModeVideo from '../../assets/desktopgrain.mp4';
import lightModeVideo from '../../assets/Automatic.mp4';
import { useTheme } from '../../ThemeContext'; 

import linkedinIcon from '/src/assets/linkk.png';  
import mailIcon from '/src/assets/mail.png'; 
import phoneIcon from '/src/assets/phone.png';

function Contact() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null); 
  const { isLightMode } = useTheme();
  
  const [showMailPopup, setShowMailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false); 
  const [email, setEmail] = useState('ngk.kasia@gmail.com'); 
  const phoneNumber = '0032 472 84 56 12'; 
  const [isScaling, setIsScaling] = useState(false); // Nouveau state pour gérer le scaling
  const [isDoubleScaling, setIsDoubleScaling] = useState(false); // Pour gérer la double pulsion

  const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

  const handleMailClick = () => {
    setShowMailPopup(true);
    triggerDoublePulsation();
  };

  const handlePhoneClick = () => {
    setShowPhonePopup(true); 
    triggerDoublePulsation();
  };

  const handleClosePopup = () => {
    setShowMailPopup(false);
    setShowPhonePopup(false); 
  };

  const handleSendMail = () => {
    window.location.href = `mailto:${email}`;
    setShowMailPopup(false);
  };

  const handleCallFaceTime = () => {
    window.location.href = `facetime:${phoneNumber}`;
    setShowPhonePopup(false);
  };

  // Fonction pour scroller jusqu'à la vidéo et la démarrer
  const handleScrollToVideo = () => {
    if (videoRef.current) {
      // Scroller jusqu'à la vidéo
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Démarrer la vidéo automatiquement
      videoRef.current.play();
    }

    // Déclencher le scaling des icônes
    setIsScaling(true);
    // Après 1 seconde, revenir à la taille normale
    setTimeout(() => {
      setIsScaling(false);
    }, 1000);
  };

  // Fonction pour gérer la double pulsion
  const triggerDoublePulsation = () => {
    setIsDoubleScaling(true);
    setTimeout(() => {
      setIsDoubleScaling(false);
    }, 600); // Temps entre les deux pulsations (par exemple 600ms)
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

        // Animation plus fluide avec interpolation
        requestAnimationFrame(() => {
          video.currentTime = progress * video.duration;
        });
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
      <div className='ctc-me' onClick={handleScrollToVideo}>
        <p>Contact me, please</p>
      </div>
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
        <button 
          onClick={() => window.open('https://www.linkedin.com', '_blank')}
          className={isScaling || isDoubleScaling ? 'scale-up' : ''}
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </button>
        <button 
          onClick={handleMailClick}
          className={isScaling || isDoubleScaling ? 'scale-up' : ''}
        >
          <img src={mailIcon} alt="Email" />
        </button>
        <button 
          onClick={handlePhoneClick}
          className={isScaling || isDoubleScaling ? 'scale-up' : ''}
        >
          <img src={phoneIcon} alt="Phone" />
        </button>
      </div>

      {/* Popup pour l'email */}
      {showMailPopup && (
        <div className="mail-popup">
          <div className="popup-content">
            <p>e-mail: {email}</p>
            <button onClick={handleSendMail}>Envoyer un mail</button>
            <button onClick={handleClosePopup}>Fermer</button>
          </div>
        </div>
      )}

      {/* Popup pour le téléphone */}
      {showPhonePopup && (
        <div className="phone-popup">
          <div className="popup-content">
            <p>Numéro de téléphone: {phoneNumber}</p>
            <button onClick={handleCallFaceTime}>Appeler via FaceTime</button>
            <button onClick={handleClosePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;




// import React, { useEffect, useRef, useState } from 'react';
// import './Contact.css'; 
// import darkModeVideo from '../../assets/desktopOGGGG.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { useTheme } from '../../ThemeContext'; 

// import linkedinIcon from '/src/assets/linkk.png';  
// import mailIcon from '/src/assets/mail.png'; 
// import phoneIcon from '/src/assets/phone.png';

// function Contact() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null); 
//   const { isLightMode } = useTheme();
  
//   const [showMailPopup, setShowMailPopup] = useState(false);
//   const [showPhonePopup, setShowPhonePopup] = useState(false); 
//   const [email, setEmail] = useState('ngk.kasia@gmail.com'); 
//   const phoneNumber = '0032 472 84 56 12'; 

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   const handleMailClick = () => {
//     setShowMailPopup(true);
//   };

//   const handlePhoneClick = () => {
//     setShowPhonePopup(true); 
//   };

//   const handleClosePopup = () => {
//     setShowMailPopup(false);
//     setShowPhonePopup(false); 
//   };

//   const handleSendMail = () => {
//     window.location.href = `mailto:${email}`;
//     setShowMailPopup(false);
//   };

//   const handleCallFaceTime = () => {
//     window.location.href = `facetime:${phoneNumber}`;
//     setShowPhonePopup(false);
//   };

//   // Fonction pour scroller jusqu'à la vidéo et la démarrer
//   const handleScrollToVideo = () => {
//     if (videoRef.current) {
//       // Scroller jusqu'à la vidéo
//       videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
//       // Démarrer la vidéo automatiquement
//       videoRef.current.play();
//     }
//   };

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

//         // Animation plus fluide avec interpolation
//         requestAnimationFrame(() => {
//           video.currentTime = progress * video.duration;
//         });
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
//       <div className='ctc-me' onClick={handleScrollToVideo}>
//         <p>Contact me, please</p>
//       </div>
//       <video
//         ref={videoRef}
//         className="main-video video-hey video-ctc"
//         muted
//         playsInline
//       >
//         <source src={currentVideo} type="video/mp4" />
//         Votre navigateur ne supporte pas la balise vidéo.
//       </video>

//       {/* Div pour les icônes */}
//       <div className="contact-buttons">
//         <button onClick={() => window.open('https://www.linkedin.com', '_blank')}>
//           <img src={linkedinIcon} alt="LinkedIn" />
//         </button>
//         <button onClick={handleMailClick}>
//           <img src={mailIcon} alt="Email" />
//         </button>
//         <button onClick={handlePhoneClick}>
//           <img src={phoneIcon} alt="Phone" />
//         </button>
//       </div>

//       {/* Popup pour l'email */}
//       {showMailPopup && (
//         <div className="mail-popup">
//           <div className="popup-content">
//             <p>e-mail: {email}</p>
//             <button onClick={handleSendMail}>Envoyer un mail</button>
//             <button onClick={handleClosePopup}>Fermer</button>
//           </div>
//         </div>
//       )}

//       {/* Popup pour le téléphone */}
//       {showPhonePopup && (
//         <div className="phone-popup">
//           <div className="popup-content">
//             <p>Numéro de téléphone: {phoneNumber}</p>
//             <button onClick={handleCallFaceTime}>Appeler via FaceTime</button>
//             <button onClick={handleClosePopup}>Fermer</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Contact;





