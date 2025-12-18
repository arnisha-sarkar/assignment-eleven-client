import React from "react";
import Container from "../../Shared/Container";
import customer from "../../../assets/customer.webp";
import { motion } from "framer-motion";
const Customer = () => {
  return (
    <div>
      <Container>
        <div className="flex mt-12 gap-9">
          <div className="w-[50%] flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl"
            >
              Serving Customers With Care
            </motion.h2>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6"
            >
              We prioritize our customers’ satisfaction. From placing orders to
              receiving your garments, our dedicated support ensures a smooth
              and enjoyable shopping experience every step of the way.Hear
              directly from our satisfied customers! From premium quality
              garments to on-time delivery, our clients share their experiences
              to help you shop with confidence.
            </motion.p>
          </div>
          <div className="w-[50%]">
            <img src={customer} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
