import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import { useNavigate } from 'react-router-dom'; 
import Model from './Model';
import './WelcomeThree.css';

const WelcomeThree = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();  
  const [textVisible, setTextVisible] = useState(false);
  const [typingText, setTypingText] = useState('');  
  const [isTyping, setIsTyping] = useState(false);  
  const [showWebDev, setShowWebDev] = useState(false);  
  const [showWebDesigner, setShowWebDesigner] = useState(false);  
  const [showFrontend, setShowFrontend] = useState(false);  
  const [showBackend, setShowBackend] = useState(false);  
  const [showGraphic, setShowGraphic] = useState(false);  
  const [showDesigner, setShowDesigner] = useState(false);  
  const [showAnimator, setShowAnimator] = useState(false);  
  const [showModeling, setShowModeling] = useState(false);  
  const [showArtist, setShowArtist] = useState(false);  
  const [showBothFeet, setShowBothFeet] = useState(false);  
  const [showGround, setShowGround] = useState(false);  
  const [showOn, setShowOn] = useState(false);  
  const [showEagerTo, setShowEagerTo] = useState(false);  
  const [showTypingText, setShowTypingText] = useState(true); 
  const [typingTextMeetYou, setTypingTextMeetYou] = useState(''); 
  const [showHey, setShowHey] = useState(true);
  const [textContainerVisible, setTextContainerVisible] = useState(true); 
  const [textVisiblee, setTextVisiblee] = useState(true);



  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,  
      y: -(event.clientY / window.innerHeight) * 2 + 1, 
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMeshClick = () => {
    navigate('/home');
  };

  // Fonction qui permet de taper un texte caractere par caractere
  const typeWriter = (text, setTextFunction, delay = 0, speed = 100) => {
    if (isTyping) return; // empeche de demarrer une nouvelle animation si une est en cours
    setIsTyping(true);     
    let i = 0;
    setTextFunction('');  // reinitialise le texte affiche

    setTimeout(() => {
      const interval = setInterval(() => {
        setTextFunction((prev) => prev + text.charAt(i));  // ajoute un caractere a la fois
        i++;
        if (i === text.length) {
          clearInterval(interval);  // arrete l'intervalle quand tout le texte est affiche
          setIsTyping(false);       // marque l'animation comme terminee
        }
      }, speed);
    }, delay);
  };

  // gestion du texte au moment ou le composant est monte
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTextVisible(true);
      typeWriter("I\'m", setTypingText, 0, 100);  
    }, 1100);

    const timeout2 = setTimeout(() => {
      typeWriter(" Kasia", setTypingText, 300, 100);  
    }, 2100); 

    const timeout3 = setTimeout(() => {
        setShowWebDev(true);  
        setShowTypingText(false);  
        setShowHey(false);  
      }, 3500);

    const timeout4 = setTimeout(() => {
      setShowWebDesigner(true);  
    }, 3700);  

    const timeout5 = setTimeout(() => {
      setShowFrontend(true);  
    }, 3900);

    const timeout6 = setTimeout(() => {
      setShowBackend(true);  
    }, 4100);

    const timeout7 = setTimeout(() => {
        setShowDesigner(true); 
      }, 4300);

    const timeout8 = setTimeout(() => {
      setShowGraphic(true); 
    }, 4500);

    const timeout9 = setTimeout(() => {
      setShowAnimator(true);  
    }, 4700);

    const timeout10 = setTimeout(() => {
      setShowModeling(true);  
    }, 4900);

    const timeout11 = setTimeout(() => {
      setShowArtist(true);  
    }, 5100);

    const timeout12 = setTimeout(() => {
      setShowBothFeet(true);  
    }, 5300);

    const timeout13 = setTimeout(() => {
        setShowGround(true);  
      }, 5400);
      
    const timeout14 = setTimeout(() => {
        setShowOn(true);  
    }, 5450);
      
    const timeout15 = setTimeout(() => {
        setShowEagerTo(true);  
    }, 5500);
      
    const timeout16 = setTimeout(() => {
        typeWriter("mmeet you!", setTypingTextMeetYou, 0, 75);  
    }, 5600);

    const textTimeout = setTimeout(() => {
        setTextVisiblee(false);
    }, 8000);

    const timeoutDisappear = setTimeout(() => {
        setTextContainerVisible(false);
    }, 10000); 
      

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
      clearTimeout(timeout11);
      clearTimeout(timeout12);
      clearTimeout(timeout13);
      clearTimeout(timeout14);
      clearTimeout(timeout15);
      clearTimeout(timeout16);
      clearTimeout(textTimeout);
      clearTimeout(timeoutDisappear);

    };
  }, []);




  // l'observateur
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // si l'element est visible dans le viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stoppe l'observation une fois l'animation lancee
      }
    });
  }, {
    threshold: 0.5 // l'element doit etre a 50% visible pour declencher l'animation
  });
  
  // selectionner tous les elements de texte a observer
  const textElements = document.querySelectorAll('.text-wd');
  
  // observer chaque element
  textElements.forEach(element => {
    observer.observe(element);
  });
  

  return (
    <div className="welcome-three" style={{ display: 'flex' , height: '100vh'}}>
        {textContainerVisible && (
            <div className={`text-container ${textVisiblee ? '' : 'fade-out'}`}>
            {showHey && <div className="text">HEY</div>} 
            
            {textVisible && showTypingText && (
                <div className="text typing-effect">{typingText}</div> 
            )}
            {textVisible && showWebDev && <div className="text-wd">Frontend,</div>}
            {textVisible && showWebDesigner && <div className="text-wd">Backend,</div>}
            {textVisible && showFrontend && <div className="text-wd">Web</div>}
            {textVisible && showBackend && <div className="text-wd">Developer,</div>}
            {textVisible && showDesigner && <div className="text-wd">Designer,</div>}
            {textVisible && showGraphic && <div className="text-wd">Graphic,</div>}
            {textVisible && showAnimator && <div className="text-wd">Animator 3D,</div>}
            {textVisible && showModeling && <div className="text-wd">Modeling,</div>}
            {textVisible && showArtist && <div className="text-wd">An artist</div>}
            {textVisible && showBothFeet && <div className="text-wd">with both</div>}
            {textVisible && showGround && <div className="text-wd">feet on the</div>}
            {textVisible && showOn && <div className="text-wd">ground,</div>}
            {textVisible && showEagerTo && <div className="text-wd">eager to</div>}
            {textVisible && <div className="text-wd">{typingTextMeetYou}</div>}  
            </div>
        )}
      <Canvas className='custom-canvas'>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={0.7} />
        <Model mousePosition={mousePosition} onClick={handleMeshClick} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default WelcomeThree;











