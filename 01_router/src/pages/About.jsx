import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to our website! We are dedicated to providing the best services and solutions to our customers. Our team is passionate, experienced, and committed to excellence.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to deliver high-quality products that meet the needs of our clients while fostering innovation and creativity. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;