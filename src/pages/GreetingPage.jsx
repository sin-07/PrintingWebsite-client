import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GreetingPage = () => {
  return (
    <>
       <motion.div
        className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-green-600 mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🎉 Thank You! 🎉
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We appreciate your effort in reaching out to us.  
            Our team will review your queries or suggestions and try to make changes ASAP! 💙
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/">
              <motion.button
                className="bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default GreetingPage;
