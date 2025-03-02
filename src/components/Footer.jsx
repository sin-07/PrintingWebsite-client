import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-10 w-full "
    >
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400">
            Chhaya Printing Solution
          </h2>
          <p className="text-gray-400 text-lg mt-2">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
         <p className="mt-4 text-gray-400 text-lg ">
         <Link to="/developer" className=" hover:text-blue-400  transition duration-300">
            Developed by
          </Link>
         </p>
        </div>
        <div className="text-center md:text-right space-y-3">
          <p className="flex items-center justify-center md:justify-end text-xl">
            <FaMapMarkerAlt className="mr-2 text-blue-400" />
            Bajrangpuri, Nahar Road, Patna-7
          </p>
          <p className="flex items-center justify-center md:justify-end text-xl">
            <FaPhoneAlt className="mr-2 text-green-400" />
            8507217478, 7739694140
          </p>
          <p className="flex items-center justify-center md:justify-end text-xl">
            <FaEnvelope className="mr-2 text-yellow-400" />
            <a
              href="mailto:chhayaprintingsolution@gmail.com"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
            >
              chhayaprintingsolution@gmail.com
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
