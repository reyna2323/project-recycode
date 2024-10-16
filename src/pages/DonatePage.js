import React from 'react';
import Button from '../components/Button';

const DonatePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
      <p>
        You can help by donating clothes or supporting us financially.
      </p>
      <Button onClick={() => alert('Donate Now!')}>Donate Now</Button>
    </div>
  );
}

export default DonatePage;
