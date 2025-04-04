import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Discover amazing content and explore our features. We are here to
          provide you with the best experience.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
