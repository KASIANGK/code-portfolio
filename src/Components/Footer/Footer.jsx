import React from 'react';
import './Footer.css';  

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Mon Site Web. Tous droits réservés.</p>
        <ul className='footer-links'>
          <li><a href='#'>Mentions Légales</a></li>
          <li><a href='#'>Politique de Confidentialité</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;