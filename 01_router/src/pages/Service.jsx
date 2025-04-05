import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern and responsive websites tailored to your needs.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "MIS Profile Services",
    description: "Streamline your business processes with MIS solutions.",
    icon: "📊",
  },
];

const Service = (prop) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={`/services/${service.id}`}
              className="text-blue-500 hover:underline font-medium"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
