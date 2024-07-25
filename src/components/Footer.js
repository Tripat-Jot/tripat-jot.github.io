import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} TPS. </p>
    </footer>
  );
};

export default Footer;
