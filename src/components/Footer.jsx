import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="campaign-footer">
      <div className="footer-container">
        <p>© 2025 Hon. Motunrayo Gbadebo-Alogba Campaign. All rights reserved.</p>
        <p className="designer-credit">
          Designed by Majolagbe Fahizol Damilola
          <a
            href="https://www.instagram.com/__fahizol?igsh=MWp1dWdmZmhreWl5YQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-icon"
            title="Connect with the designer on Instagram"
          >
            <FaInstagram />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
