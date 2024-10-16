import React from 'react';
import '../styles/HomePage.css'; // Make sure this path is correct
import Partners from './Partners'; // Import the Partners component

const HomePage = () => {
  return (
    <div>
      <div className="home-hero">
        <div className="hero-content">
          <h1>PROJECT RECYCODE</h1>
          <p>Thank you to the donors who have contributed towards collecting over 1310 lbs of clothing!</p>
          <div className="subscribe-container">
            <input 
              type="text" 
              placeholder="Subscribe to our mailing list!" 
              className="subscribe-input" 
            />
            <button className="subscribe-button">Submit</button>
          </div>
        </div>
      </div>
      <Partners /> {/* Include the Partners component here */}
    </div>
  );
};

export default HomePage;
