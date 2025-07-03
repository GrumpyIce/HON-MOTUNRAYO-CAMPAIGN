import React from 'react';
import './EndorsementByAction.css';

const EndorsementByAction = () => {
  return (
    <section className="endorsement" id="endorsement">
      <div className="container">
        <h2>Endorsement by Action</h2>
        <p className="quote">
          “Endorsement goes beyond words — it’s in the action we take to build the future we believe in.”
        </p>

        <div className="action-buttons">
          <a href="#support" className="action-btn join">Join the Movement</a>
          <a href="#volunteer" className="action-btn volunteer">Volunteer Now</a>
          <a href="https://www.inecnigeria.org/elections/polling-units/" target="_blank" rel="noopener noreferrer" className="action-btn polling">Find Your Polling Unit</a>
        </div>
      </div>
    </section>
  );
};

export default EndorsementByAction;
