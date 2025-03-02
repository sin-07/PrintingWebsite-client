import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center flex-1 px-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Welcome to Chhaya Printing Solution
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          Your one-stop solution for high-quality prints
        </p>
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md"
          >
            Explore Services
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
