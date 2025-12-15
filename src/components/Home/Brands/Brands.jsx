import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import brand from "../../../assets/company_logo_1.jpg";
import brandOne from "../../../assets/brand2.jpg";
import brandTwo from "../../../assets/brand3.png";
import brandThree from "../../../assets/brand4.jpg";
import brandFour from "../../../assets/brand5.jpg";
const brandLogos = [brand, brandOne, brandTwo, brandThree, brandFour];
const Brands = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
