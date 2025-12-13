import React from "react";
import Container from "../components/Shared/Container";
import about_us from "../assets/about-us.webp";
const AboutUs = () => {
  return (
    <div className="bg-[#0d0c22]">
      <Container>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white text-2xl font-bold my-8">
            “Crafting Quality, Stitch by Stitch”
          </h1>
          <img src={about_us} alt="" />
          <p className="text-center text-white text-[16px]  w-[80%] my-8">
            “At Graments, we believe that every piece of clothing tells a story.
            From selecting premium fabrics to designing timeless styles, we are
            dedicated to providing our customers with high-quality garments that
            combine comfort, style, and durability. Our mission is to make
            fashion accessible, sustainable, and meaningful, ensuring that every
            stitch reflects our commitment to excellence.”
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
