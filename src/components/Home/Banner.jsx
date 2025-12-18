import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full h-96 bg-cover bg-center"
        // style={{ backgroundImage: `url(${banner})` }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl"
          >
            Garments Order & Production Tracker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[60%] mx-auto text text-gray-300 text-center my-5"
          >
            A comprehensive system designed to streamline the management of
            garment orders and production processes. It allows businesses to
            track order status, monitor production progress, manage inventory,
            and ensure timely delivery—all in a centralized, easy-to-use
            platform. Ideal for garment manufacturers, suppliers, and retailers
            seeking efficiency and transparency in their operations.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/all-product" className="btn btn-primary">
              View Product
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
