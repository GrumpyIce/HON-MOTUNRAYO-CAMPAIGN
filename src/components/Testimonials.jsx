import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Mrs. Adeola A.",
    text: "Hon. Motunrayo has transformed our roads and health centers. She's truly for the people!"
  },
  {
    name: "Mr. Ibrahim S.",
    text: "Her empowerment programs helped my daughter start her tailoring business. We’re forever grateful."
  },
  {
    name: "Ngozi E.",
    text: "She listens, she acts, and she delivers. That’s why she has my vote again."
  }
];


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What People Are Saying</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="text">"{t.text}"</p>
              <p className="name">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;