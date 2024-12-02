import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Importer le contexte
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Team from './Components/Teams/Team';
import Players from './Components/Players/Players'
import General from './Components/General/General';

function App() {
  return (
    <ThemeProvider>

      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/players" element={<Players />} />
            <Route path="/general" element={<General />} />

            {/* <Route path="/" element={<Home selectedSlide={selectedSlide} onSlideChange={handleSlideChange} />} /> */}
            {/* <Route path="/homebis" element={<HomeBis selectedSlide={selectedSlide} onSlideChange={handleSlideChange} />} /> */}
          </Routes>

      </Router>
      </ThemeProvider>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import '../src/index.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import HomeBis from './Components/Home/HomeBis';
// import HomeVideo from './Components/Home/HomeVideo';
// import About from './Components/About/About';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import HorizontalCarousel from './Components/Carousel/HorizontalCarousel';
// import { ThemeProvider } from './ThemeContext';

// import darkModeVideo from '../src/assets/webDev2.mp4';
// import lightModeVideo from '../src/assets/webDevLight.mp4';

// function App() {
//   const [isLightMode, setIsLightMode] = useState(false);

//   useEffect(() => {
//     document.body.classList.toggle('light-mode', isLightMode);
//     document.body.classList.toggle('dark-mode', !isLightMode);
//   }, [isLightMode]);

//   const toggleMode = () => {
//     setIsLightMode(prevMode => !prevMode);
//   };

//   //   const [selectedSlide, setSelectedSlide] = useState(() => {
//   //   const savedSlide = localStorage.getItem("selectedSlide");
//   //   return savedSlide ? JSON.parse(savedSlide) : 0; // 0 par défaut
//   // });

//   // useEffect(() => {
//   //   localStorage.setItem("selectedSlide", JSON.stringify(selectedSlide));
//   // }, [selectedSlide]);

//   const handleSlideChange = (index) => {
//     setSelectedSlide(index);
//   };

//   return (
//     <ThemeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home onSlideChange={handleSlideChange} isLightMode={isLightMode} />} />
//           <Route path="/homebis" element={<HomeBis isLightMode={isLightMode} />} />

//           {/* <Route path="/home" element={<HomeVideo isLightMode={isLightMode} />} /> */}
//           {/* <Route path="/" element={<HorizontalCarousel isLightMode={isLightMode} />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;






// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import HomeBis from './Components/Home/HomeBis';
// import Portfolio from './Components/Portfolio/Portfolio'; // Exemple de composant
// import About from './Components/About/About'; // Exemple de composant

// function App() {
//   const [selectedSlide, setSelectedSlide] = useState(() => {
//     const savedSlide = localStorage.getItem("selectedSlide");
//     return savedSlide ? JSON.parse(savedSlide) : 0; // 0 par défaut
//   });

//   useEffect(() => {
//     localStorage.setItem("selectedSlide", JSON.stringify(selectedSlide));
//   }, [selectedSlide]);

//   const handleSlideChange = (index) => {
//     setSelectedSlide(index);
//   };

//   return (
//     <ThemeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home selectedSlide={selectedSlide} onSlideChange={handleSlideChange} />} />
//           <Route path="/homebis" element={<HomeBis />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;




// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext'; // Importer le contexte
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import HomeBis from './Components/Home/HomeBis';

// function App() {
//   const [selectedSlide, setSelectedSlide] = useState(() => {
//     // Récupérer la valeur de localStorage ou définir à 0 par défaut
//     const savedSlide = localStorage.getItem("selectedSlide");
//     return savedSlide ? JSON.parse(savedSlide) : 0; // 0 par défaut
//   });

//   // Mettre à jour localStorage lorsque selectedSlide change
//   useEffect(() => {
//     localStorage.setItem("selectedSlide", JSON.stringify(selectedSlide));
//   }, [selectedSlide]);

//   // Fonction pour changer le slide
//   const handleSlideChange = (index) => {
//     setSelectedSlide(index);
//   };

//   return (
//     <ThemeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home selectedSlide={selectedSlide} onSlideChange={handleSlideChange} />} />
//           <Route path="/homebis" element={<HomeBis selectedSlide={selectedSlide} onSlideChange={handleSlideChange} />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext'; // Importer le contexte
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import HomeBis from './Components/Home/HomeBis';
// import HomeVideo from './Components/Home/HomeVideo';
// import About from './Components/About/About';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import HorizontalCarousel from './Components/Carousel/HorizontalCarousel';

// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/homebis" element={<HomeBis />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import '../src/index.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import HomeBis from './Components/Home/HomeBis';
// import HomeVideo from './Components/Home/HomeVideo';
// import About from './Components/About/About';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import HorizontalCarousel from './Components/Carousel/HorizontalCarousel';

// import darkModeVideo from '../src/assets/webDev2.mp4';
// import lightModeVideo from '../src/assets/webDevLight.mp4';

// function App() {
//   const [isLightMode, setIsLightMode] = useState(false);

//   useEffect(() => {
//     document.body.classList.toggle('light-mode', isLightMode);
//     document.body.classList.toggle('dark-mode', !isLightMode);
//   }, [isLightMode]);

//   const toggleMode = () => {
//     setIsLightMode(prevMode => !prevMode);
//   };

//   return (
//     <Router>
//       <Navbar onToggleMode={toggleMode} isLightMode={isLightMode} />
//       <Routes>
//         <Route path="/" element={<Home isLightMode={isLightMode} />} />
//         <Route path="/homebis" element={<HomeBis isLightMode={isLightMode} />} />

//         {/* <Route path="/home" element={<HomeVideo isLightMode={isLightMode} />} /> */}
//         {/* <Route path="/" element={<HorizontalCarousel isLightMode={isLightMode} />} /> */}
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


