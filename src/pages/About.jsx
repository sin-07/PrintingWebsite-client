import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Reusable Animation Wrapper
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 p-2 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full mt-[5rem] flex items-center justify-center bg-cover bg-center px-4 sm:px-3"
        style={{ backgroundImage: `url('/images/printing-bg.jpg')` }}
      >
        <FadeIn>
          <div className="bg-white bg-opacity-90 p-6 sm:p-5 rounded-lg text-center max-w-sm sm:max-w-3xl shadow-lg">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-700">
              About Chhaya Printing Solution
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
              Transforming Ideas into High-Quality Prints with Precision and
              Creativity
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-8 py-5 sm:py-12 flex flex-col gap-8">
        {[
          {
            title: "Our Expertise",
            description:
              "With years of experience in the printing industry, we specialize in producing high-quality prints for businesses, events, and personal needs. From business cards to large-format banners, our services cater to all your printing demands.",
          },
          {
            title: "Why Choose Us?",
            description:
              "We use state-of-the-art printing technology and premium materials to ensure perfection in every print. Our team is committed to delivering timely and cost-effective solutions without compromising on quality.",
          },
          {
            title: "Our Vision & Commitment",
            description:
              "Founded by Shubham Kumar and Awdhesh Kumar in Patna, our goal is to revolutionize the printing industry by offering eco-friendly, innovative, and high-quality printing services that exceed customer expectations.",
          },
          {
            title: "Our Services",
            description:
              "✔️ Offset & Digital Printing\n✔️ Business Cards & Brochures\n✔️ Large Format Printing (Banners, Posters, Signage)\n✔️ Custom Branding Materials\n✔️ Personalized Printing (T-Shirts, Mugs, and More)",
          },
          {
            title: "Client Satisfaction",
            description:
              "We believe in building long-term relationships with our clients by offering exceptional service, competitive pricing, and unmatched print quality. Customer satisfaction is our top priority.",
          },
        ].map((section, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="text-center max-w-sm sm:max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
                {section.title}
              </h2>
              <p className="text-gray-700 mt-3 text-sm sm:text-lg whitespace-pre-line">
                {section.description}
              </p>
            </div>
          </FadeIn>
        ))}

        {/* Call to Action */}
        <FadeIn delay={0.6}>
          <div className="text-center max-w-sm sm:max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Looking for High-Quality Prints?
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-lg">
              Contact us today for customized and professional printing
              solutions!
            </p>
            <Link
              to="/contact"
              className="block mt-5 text-blue-600 font-semibold"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-5 bg-blue-600 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-blue-700"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
