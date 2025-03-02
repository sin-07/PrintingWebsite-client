import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Cards",
    description: "Premium quality business cards with customizable designs.",
    image: "/images/business-card.jpg"
  },
  {
    title: "Brochures & Flyers",
    description: "Eye-catching brochures and flyers for your business needs.",
    image: "/images/brochure.jpg"
  },
  {
    title: "Posters & Banners",
    description: "High-resolution posters and banners for events and promotions.",
    image: "/images/poster.jpg"
  },
  {
    title: "Custom T-Shirts",
    description: "Personalized t-shirts with vibrant prints and premium fabric.",
    image: "/images/tshirt.jpg"
  }
];

const Services = () => {
  return (
    <div className="bg-gray-100 pt-20 pb-20 min-h-screen flex flex-col items-center px-4 md:px-10 overflow-auto relative z-10">
      <div className="container mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-900"
        >
          Our Services
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700">
          We offer a wide range of high-quality printing solutions.
        </p>
        <div className="flex flex-col space-y-10 mt-10 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-white shadow-lg rounded-lg overflow-hidden p-6`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-md"
              />
              <div className="md:w-1/2 text-left p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
