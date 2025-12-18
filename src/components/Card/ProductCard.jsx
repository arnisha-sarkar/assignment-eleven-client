import React from "react";
import { Link } from "react-router";
const ProductCard = ({ product }) => {
  const { _id, image, name, category, price, quantity } = product || {};
  console.log(product);
  return (
    <Link
      to={`/product-details/${_id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-full group bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        {/* Product Image */}
        <div
          className="
      aspect-square 
      w-full 
      relative 
      overflow-hidden 
      rounded-xl
    "
        >
          <img
            className="
        object-cover 
        h-full 
        w-full 
        group-hover:scale-110 
        transition 
        duration-300
      "
            src={Array.isArray(image) ? image[0] : image}
            alt="Product Image"
          />
        </div>

        {/* Product Name / Title */}
        <h2 className="font-semibold text-lg mt-2 line-clamp-1">{name}</h2>

        {/* Product Category */}
        <p className="text-sm text-gray-500">Category: {category}</p>

        {/* Price */}
        <div className="font-bold text-lg text-lime-600">${price}</div>
        {/* Available Quantity */}
        <p className="text-sm text-gray-500">Available: {quantity}</p>

        {/* View Details Button */}
        <button
          className="
      mt-3 
      w-full 
      bg-lime-500 
      hover:bg-lime-600 
      text-white 
      py-2 
      rounded-lg 
      font-medium 
      transition
    "
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
