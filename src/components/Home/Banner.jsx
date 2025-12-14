import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router";
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
          <h1 className="text-white text-4xl">
            Garments Order & Production Tracker
          </h1>
          <p className="w-[60%] mx-auto text text-gray-300 text-center my-5">
            A comprehensive system designed to streamline the management of
            garment orders and production processes. It allows businesses to
            track order status, monitor production progress, manage inventory,
            and ensure timely delivery—all in a centralized, easy-to-use
            platform. Ideal for garment manufacturers, suppliers, and retailers
            seeking efficiency and transparency in their operations.
          </p>
          <Link to="/all-product" className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
