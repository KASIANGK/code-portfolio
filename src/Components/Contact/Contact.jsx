import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'; 
import darkModeVideo from '/assets/desktopgrain.mp4';
import lightModeVideo from '/assets/Automatic.mp4';
import { useTheme } from '../../ThemeContext'; 

import linkedinIcon from '/assets/linkk.png';  
import mailIcon from '/assets/mail.png'; 
import phoneIcon from '/assets/phone.png';

function Contact() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null); 
  const { isLightMode } = useTheme();
  
  const [showMailPopup, setShowMailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false); 
  const [email, setEmail] = useState('ngk.kasia@gmail.com'); 
  const phoneNumber = '0032 472 84 56 12'; 
  const [isScaling, setIsScaling] = useState(false); // pour gerer le scaling
  const [isDoubleScaling, setIsDoubleScaling] = useState(false); // pr gerer la double pulsion

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

  // fonction pour scroller jusqu'a la video et la demarrer
  const handleScrollToVideo = () => {
    if (videoRef.current) {
      // scroller jusqu'a la vidro
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // demarrer la video automatiquement
      videoRef.current.play();
    }

    // declencher le scaling des icones
    setIsScaling(true);
    // apres 1 seconde, revenir a la taille normale
    setTimeout(() => {
      setIsScaling(false);
    }, 1000);
  };

  // gestion de la double pulsion
  const triggerDoublePulsation = () => {
    setIsDoubleScaling(true);
    setTimeout(() => {
      setIsDoubleScaling(false);
    }, 600); // temps entre les deux pulsations 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const video = videoRef.current;

      // obtenir les dimensions de la section
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      // position actuelle de la section par rapport a la fenetre
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // si la section est visible dans la fenetre
      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        // Calcul du pourcentage de defilement dans la section
        const progress = Math.min(
          Math.max((window.innerHeight - sectionTop) / (sectionHeight + window.innerHeight), 0),
          1
        );

        // animation plus fluide avec interpolation
        requestAnimationFrame(() => {
          video.currentTime = progress * video.duration;
        });
      }
    };

    // ecouteur de scroll
    window.addEventListener('scroll', handleScroll);

    // nettoyage a la destruction du composant
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

      {/* div pour les icones */}
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

      {/* popup pour l'email */}
      {showMailPopup && (
        <div className="mail-popup">
          <div className="popup-content">
            <p>e-mail: {email}</p>
            <button onClick={handleSendMail}>Envoyer un mail</button>
            <button onClick={handleClosePopup}>Fermer</button>
          </div>
        </div>
      )}

      {/* popup pour le telephone */}
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


