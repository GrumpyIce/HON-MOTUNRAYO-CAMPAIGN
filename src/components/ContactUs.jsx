import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="intro">Have questions, suggestions, or want to get in touch with our campaign office? We’d love to hear from you.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;