import React from "react";
import Container from "../components/Shared/Container";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Container>
      <div className="my-20 max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          Contact Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-600 mb-10"
        >
          Have questions or need support? Feel free to reach out to us. Our team
          is always ready to help you.
        </motion.p>

        {/* Contact Form */}
        <form className="space-y-5 border p-6 rounded-lg shadow-sm">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
