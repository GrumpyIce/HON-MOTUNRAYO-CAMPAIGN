import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <h2>Key Achievements</h2>
        <p className="quote">“Leadership is the capacity to translate vision into reality.” – Warren Bennis</p>
        <p className="intro">
          Since assuming office on July 27, 2021, Hon. Motunrayo Gbadebo-Alogba has implemented bold policies centered on education, economy, health, infrastructure, and youth empowerment.
        </p>

        <div className="achievement-block">
          <h3>🚧 Works & Infrastructure</h3>
          <ul>
            <li>Renovation of Ijede Town Hall & Egbin Kingdom Hall</li>
            <li>Installation of solar street lights across wards</li>
            <li>Construction of boreholes and drainage systems</li>
            <li>Ongoing construction of Legislative & Customary Court Complex</li>
          </ul>
        </div>

        <div className="achievement-block">
          <h3>🏥 Health Sector</h3>
          <ul>
            <li>Provision of a new ambulance to Oke-Eletu PHC</li>
            <li>Breast cancer, hepatitis, and malaria awareness programs</li>
            <li>Medical outreach & free eye screenings</li>
          </ul>
        </div>

        <div className="achievement-block">
          <h3>📘 Education</h3>
          <ul>
            <li>Distribution of UTME forms, uniforms, and materials</li>
            <li>Establishment of a model school with ICT lab</li>
            <li>Financial rewards to top-performing students</li>
          </ul>
        </div>

        <div className="achievement-block">
          <h3>🌿 Empowerment & Social Intervention</h3>
          <ul>
            <li>Youth skills training with startup kits</li>
            <li>Quarterly food and cash distribution to residents</li>
            <li>Facilitated employment opportunities within Lagos State</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
