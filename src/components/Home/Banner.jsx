import React from "react";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl">Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempora
            repudiandae sunt ad voluptas enim hic eum sequi, laboriosam illo!
          </p>
          <button className="btn btn-primary">View Product</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
