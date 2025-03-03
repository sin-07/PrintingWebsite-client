import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const message = e.target.message.value;

      if (!name || !email || !phone || !message) {
        return toast.error("Please fill all the fields");
      }
      if (!/^[a-zA-Z ]+$/.test(name)) {
        return toast.error("Name should contain only alphabets");
      }
      if (!/^\d{10}$/.test(phone)) {
        return toast.error("Phone number should contain only 10 digits");
      }
      if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
        return toast.error("Invalid email");
      }
      const res = await axios.post(
        "https://printingwebsite-server.onrender.com/contact",
        {
          name,
          email,
          phone,
          message,
        }
      );
      if (res.status === 201) {
        toast.success("User contact form submitted successfully");
        e.target.reset();
        setTimeout(() => {
          navigate("/thanks");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      } else {
        return toast.error("Unable to connect server");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gray-100 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Feedback Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white p-4 rounded-lg text-lg font-semibold 
      hover:bg-blue-600 transition-all flex items-center justify-center`}
              disabled={isLoading}
            >
              {isLoading
                ? "Please wait we've free backend so it'll take time... "
                : "Submit"}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
