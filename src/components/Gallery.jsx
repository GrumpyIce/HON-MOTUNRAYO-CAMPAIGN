import React from 'react';
import './Gallery.css';

const images = [
  {
    src: '/her with sanwo.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'SANWOLU ENDORSES IJEDE MOTUNRAYO GBADEBO-ALOGBA AS APC CANDIDATE AHEAD OF COUNCIL POLL.'
  },
  {
    src: '/apc mega rally.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'Motunrayo Gbadebo-Alogba Joins APC Lagos East Senatorial Mega Rally.'
  },

  {
    src: '/rally 4.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'The All Progressives Congress (APC) Chairmanship candidate for Ijede LCDA, Hon. Motunrayo Gbadebo-Alogba, alongside Vice Chairman candidate Hon. Femi Kabir and Councilorship candidates, joined fellow aspirants from the 16 Local Governments within the Lagos East Senatorial District at the Mega Campaign Rally held yesterday, Saturday, June 28, 2025.'
  },

  {
    src: '/igbe rally.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IGBE'
  },
  
  {
    src: '/rally 1.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IGBE'
  },


  {
    src: '/rally 2.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'The All Progressives Congress (APC) Chairmanship candidate for Ijede LCDA, Hon. Motunrayo Gbadebo-Alogba, alongside Vice Chairman candidate Hon. Femi Kabir and Councilorship candidates, joined fellow aspirants from the 16 Local Governments within the Lagos East Senatorial District at the Mega Campaign Rally held yesterday, Saturday, June 28, 2025.'
  },
  {
    src: '/rally 3.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IGBE'
  },



{
    src: '/rally 5.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IGBE'
  },

{
    src: '/rally 8.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IGBE'
  },

{
    src: '/rally 9.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IJEDE'
  },


{
    src: '/rally 10.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IJEDE'
  },


  {
    src: '/rally 11.jpg',
    caption: 'IJEDE TUNRAYO 2025',
    description: 'What a great time at IJEDE'
  },

];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2>Campaign Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.src} alt={img.caption} />
              <div className="overlay">
                <h4>{img.caption}</h4>
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;