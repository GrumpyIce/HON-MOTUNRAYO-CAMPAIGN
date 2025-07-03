import React from 'react';
import HeroSection from './components/HeroSection';
import AboutHer from './components/AboutHer';
import CampaignVision from "./components/CampaignVision";
import './App.css';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import HowToVote from './components/HowToVote';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';
import EndorsementByAction from './components/EndorsementByAction';
import BackToTop from './components/BackToTop';
import Countdown from './components/Countdown';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
       <Navbar />
      <HeroSection />
      <AboutHer /> 
      <Countdown />
      <CampaignVision />
      <Achievements />
      <Gallery />
      <HowToVote />
      <ContactUs />
      <Testimonials />
      <EndorsementByAction />
      <BackToTop />
      <Footer />
    </div>
  );
}


export default App;
