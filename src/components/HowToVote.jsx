import React from 'react';
import './HowToVote.css';

const HowToVote = () => {
  return (
    <section className="how-to-vote" id="vote">
      <div className="container">
        <h2>How to Vote</h2>
        <p className="intro">Follow these steps to make your voice count on <strong>Saturday, July 12, 2025</strong>:</p>
        <ol>
          <li><strong>Get Your PVC:</strong> Ensure you are registered and have collected your Permanent Voter's Card.</li>
          <li><strong>Locate Your Polling Unit:</strong> Use INEC’s platform or visit your local council office.</li>
          <li><strong>Arrive Early:</strong> Polls typically open by 8 AM. Get there early to avoid queues.</li>
          <li><strong>Get Accredited:</strong> Present your PVC and get verified using the BVAS machine.</li>
          <li><strong>Cast Your Vote:</strong> Thumbprint next to the <strong>broom symbol (APC)</strong>.</li>
          <li><strong>Stay Peaceful:</strong> Leave or peacefully observe the counting process.</li>
        </ol>
      </div>
    </section>
  );
};

export default HowToVote;
