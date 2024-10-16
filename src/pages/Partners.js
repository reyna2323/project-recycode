import React, { useEffect, useRef } from 'react';
import './Partners.css'; // Create this CSS file for the styling

const Partners = () => {
  const partnersRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const partnersElement = partnersRef.current;
      if (partnersElement) {
        const { top } = partnersElement.getBoundingClientRect();
        if (top < window.innerHeight) {
          partnersElement.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="partners-container" ref={partnersRef}>
      <h2>These businesses have aided us in collecting clothing. Thank you for helping us with keeping clothes out of landfills!</h2>
      <div className="partners-logos">
        <img src={require('../assets/logo1.png')} alt="Partner 1" className="partner-logo" />
        <img src={require('../assets/logo2.png')} alt="Partner 2" className="partner-logo" />
        <img src={require('../assets/logo3.jpeg')} alt="Partner 3" className="partner-logo" />
        <img src={require('../assets/logo4.jpeg')} alt="Partner 4" className="partner-logo" />
      </div>
    </div>
  );
};

export default Partners;
