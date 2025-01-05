import React, { useRef, useEffect, useState } from 'react';
import SwiperMain from '../Swiper/SwiperMain';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import './Home.css';
import lightModee from '/transition-home.mp4';

function Home() {
  const videoRef = useRef(null);  
  const sectionRef = useRef(null);  
  const [isVideoVisible, setIsVideoVisible] = useState(false);  

  // utilisation de IntersectionObserver pour detecter qd la div video est visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);  // la section est visible, on peut jouer la video
        } else {
          setIsVideoVisible(false);  // la section n'est plus visible, on met la video en pause
        }
      });
    }, { threshold: 0.5 }); // declencher lorsque 50% de la section est visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);  // on observe la section video
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);  // nettoyage de l'observateur
      }
    };
  }, []);

  // jouer ou mettre en pause la video en fonction de la visibilite
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible) {
        videoRef.current.play();  // jouer la vieo si la section est visible
      } else {
        videoRef.current.pause();  // mettre en pause si la section est invisible
      }
    }
  }, [isVideoVisible]);

  return (
    <div className="all">
      <SwiperMain />
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default Home;


