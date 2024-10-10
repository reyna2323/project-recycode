import React from 'react';

function MainContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Project Recycode</h2>
          <p className="text-gray-600 mb-6">Empowering recycling through code and innovation.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Learn More</button>
        </section>
        {/* Additional Content */}
      </div>
    </main>
  );
}

export default MainContent;
