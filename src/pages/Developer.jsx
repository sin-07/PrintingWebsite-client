import React from "react";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-8 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-5 sm:p-10 text-center"
      >
        {/* Profile Photo */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-blue-500">
          <img
            src="/images/aniket.jpg" // Ensure correct image path
            alt="Aniket Singh"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Developer Info */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mt-4">
          Aniket Singh
        </h1>
        <p className="text-base sm:text-lg text-gray-600">MERN & React Native Developer</p>
        <p className="text-sm sm:text-md text-gray-500">SOA ITER, Bhubaneswar</p>

        {/* Biography Section */}
        <div className="mt-6 text-gray-700 text-sm sm:text-lg space-y-4 text-justify leading-relaxed">
          <p>
            I am a passionate <strong>MERN Stack and React Native developer</strong> with over <strong>three years of experience</strong> in crafting seamless web and mobile applications. I thrives on transforming complex ideas into interactive, user-friendly digital solutions, leveraging his deep knowledge of modern frameworks and technologies.
          </p>
          <p>
            A student at <strong>SOA ITER, Bhubaneswar</strong>, I already made a significant mark in the tech community. My relentless curiosity and problem-solving skills have helped him secure <strong>victories in two online hackathons</strong>, showcasing my ability to innovate under pressure. I believ in writing <strong>clean, efficient code</strong> and continuously refining my skills to stay ahead in the ever-evolving tech landscape.
          </p>
          <p>
            Alongside my development expertise, I have also a <strong>certified data analyst</strong>, blending analytical insights with his technical prowess to build intelligent and scalable applications. Whether it's developing <strong>full-stack web platforms, mobile apps, or data-driven solutions</strong>, I approache each project with precision and creativity.
          </p>
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700"
        >
          Connect with Aniket
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Developer;
