// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Créez le contexte du thème
// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Chargez le mode depuis localStorage ou définissez par défaut "lightMode"
//   const [isLightMode, setIsLightMode] = useState(() => {
//     const savedMode = localStorage.getItem('isLightMode');
//     return savedMode ? JSON.parse(savedMode) : true; // Par défaut en "light mode"
//   });

//   // Mettez à jour le localStorage chaque fois que le mode change
//   useEffect(() => {
//     localStorage.setItem('isLightMode', JSON.stringify(isLightMode));

//     // Appliquez la classe à body pour changer le thème
//     document.body.classList.toggle('light-mode', isLightMode);
//     document.body.classList.toggle('dark-mode', !isLightMode);
//   }, [isLightMode]);

//   // Fonction pour changer le mode
//   const toggleMode = () => {
//     setIsLightMode((prevMode) => !prevMode); // Alterne entre light et dark mode
//   };

//   return (
//     <ThemeContext.Provider value={{ isLightMode, toggleMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Hook personnalisé pour accéder facilement au thème
// export const useTheme = () => useContext(ThemeContext);




// ok sauf darkMode slide 1
import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const ThemeContext = createContext();

// Provider du contexte
export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
    document.body.classList.toggle('dark-mode', !isLightMode);
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => useContext(ThemeContext);
