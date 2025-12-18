import React from "react";
import Container from "../components/Shared/Container";
import about_us from "../assets/about-us.webp";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="bg-[#0d0c22]">
      <Container>
        <div className="flex flex-col items-center justify-center ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl font-bold my-8"
          >
            “Crafting Quality, Stitch by Stitch”
          </motion.h1>
          <img src={about_us} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-white text-[16px]  w-[80%] my-8"
          >
            “At Graments, we believe that every piece of clothing tells a story.
            From selecting premium fabrics to designing timeless styles, we are
            dedicated to providing our customers with high-quality garments that
            combine comfort, style, and durability. Our mission is to make
            fashion accessible, sustainable, and meaningful, ensuring that every
            stitch reflects our commitment to excellence.”
          </motion.p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
