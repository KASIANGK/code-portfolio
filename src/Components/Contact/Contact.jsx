import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'; 
import darkModeVideo from '../../assets/desktopOGGGG.mp4';
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
  const [showPhonePopup, setShowPhonePopup] = useState(false); // Ajout de l'état pour le pop-up téléphone
  const [email, setEmail] = useState('ngk.kasia@gmail.com'); // Remplacez par votre propre adresse email
  const phoneNumber = '0032 472 84 56 12'; // Votre numéro de téléphone

  const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

  const handleMailClick = () => {
    setShowMailPopup(true);
  };

  const handlePhoneClick = () => {
    setShowPhonePopup(true); // Ouvre le pop-up téléphone
  };

  const handleClosePopup = () => {
    setShowMailPopup(false);
    setShowPhonePopup(false); // Ferme les deux pop-ups
  };

  const handleSendMail = () => {
    window.location.href = `mailto:${email}`;
    setShowMailPopup(false);
  };

  const handleCallFaceTime = () => {
    // Redirection vers FaceTime (iOS, macOS)
    window.location.href = `facetime:${phoneNumber}`;
    setShowPhonePopup(false);
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
        <button onClick={handlePhoneClick}> {/* Ouvre le pop-up téléphone */}
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
// import darkModeVideo from '../../assets/desktopOGG.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { useTheme } from '../../ThemeContext'; 

// import linkedinIcon from '/src/assets/linkk.png';  // Changez ces imports avec vos images
// import mailIcon from '/src/assets/mail.png'; 
// import phoneIcon from '/src/assets/phone.png';

// function Contact() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null); 
//   const { isLightMode } = useTheme();
  
//   const [showMailPopup, setShowMailPopup] = useState(false);
//   const [email, setEmail] = useState('ngk.kasia@gmail.com'); // Remplacez par votre propre adresse email

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   const handleMailClick = () => {
//     setShowMailPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowMailPopup(false);
//   };

//   const handleSendMail = () => {
//     window.location.href = `mailto:${email}`;
//     setShowMailPopup(false);
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

//       {/* Div pour les icônes */}
//       <div className="contact-buttons">
//         <button onClick={() => window.open('https://www.linkedin.com', '_blank')}>
//           <img src={linkedinIcon} alt="LinkedIn" />
//         </button>
//         <button onClick={handleMailClick}>
//           <img src={mailIcon} alt="Email" />
//         </button>
//         <button onClick={() => window.location.href = 'tel:+1234567890'}>
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
//     </div>
//   );
// }

// export default Contact;


