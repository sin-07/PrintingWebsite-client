import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div>
      {/* Navbar for Large Screens */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white p-4 fixed w-full shadow-md z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Chhaya Printing Solution"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <h1 className="text-xl sm:text-2xl font-bold">
              Chhaya Printing Solution
            </h1>
          </Link>

          {/* Large Screen Navigation */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Feedback", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-yellow-400 transition ${
                  location.pathname === link.path
                    ? "border-b-2 border-yellow-400"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <FiMenu
              size={30}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg p-6 z-50 flex flex-col"
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <FiX size={30} className="cursor-pointer" onClick={toggleSidebar} />
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-y-5">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-yellow-400 transition ${
                  location.pathname === link.path
                    ? "bg-yellow-400 text-gray-900 px-3 py-2 rounded"
                    : ""
                }`}
                onClick={toggleSidebar}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
