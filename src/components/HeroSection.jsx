import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/apc-flag.jpg') center/cover no-repeat"
      }}
    >
      <div className="hero-content">
        <h1>Hon. Motunrayo Gbadebo-Alogba for Chairman</h1>
        <p>Trusted, Proven,</p>
        <p>Ready for More</p>
        <p>Let’s take Ijede LCDA to greater heights – together</p>
        <button className="cta-button">Join the Movement</button>
      </div>

      <div className="hero-image">
        <img src="/her bold image.jpg" alt="Hon. Motunrayo Gbadebo-Alogba" />
      </div>
    </section>
  );
};

export default HeroSection;


