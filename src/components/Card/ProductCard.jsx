import React from "react";

import { Link } from "react-router";

import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiTag,
  FiStar,
  FiMapPin,
  FiCalendar,
  FiBox,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

const ProductCard = ({ product, handleDelete, role }) => {
  const {
    _id,
    image,
    name,
    description,
    category,
    price,
    quantity,
    location,
    createdAt,
  } = product || {};

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",

        month: "short",

        year: "numeric",
      })
    : "10 Jan 2026";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="col-span-1 h-full"
    >
      <div className="group flex flex-col h-[600px] bg-white dark:bg-[#0A192F] rounded-[2.5rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 relative overflow-hidden">
        {/* 1. Image Area */}

        <Link
          to={`/product-details/${_id}`}
          className="relative h-60 w-full overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-white/5"
        >
          <img
            className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
            src={Array.isArray(image) ? image[0] : image}
            alt={name}
          />

          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-[#C9A24D] text-[#0A2540] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              {category}
            </span>
          </div>

          <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <FiStar className="text-yellow-500 fill-yellow-500" size={12} />

            <span className="text-[10px] font-bold dark:text-white">4.9</span>
          </div>
        </Link>

        {/* 2. Content Area */}

        <div className="flex flex-col flex-grow mt-6 px-2">
          <Link to={`/product-details/${_id}`}>
            <h2 className="text-xl font-black text-[#0A2540] dark:text-white line-clamp-1 uppercase tracking-tight mb-2 hover:text-[#C9A24D] transition-colors">
              {name}
            </h2>
          </Link>

          <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 mb-5 italic leading-relaxed min-h-[32px]">
            {description || "Premium quality garment crafted with precision."}
          </p>

          {/* 3. Meta Info Grid */}

          <div className="grid grid-cols-2 gap-y-4 pt-5 border-t border-gray-50 dark:border-white/5 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gray-50 dark:bg-white/5 rounded-lg text-[#C9A24D]">
                <FiTag size={14} />
              </div>

              <span className="text-sm font-black text-gray-800 dark:text-gray-200">
                ${price}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gray-50 dark:bg-white/5 rounded-lg text-[#C9A24D]">
                <FiCalendar size={14} />
              </div>

              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">
                {formattedDate}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gray-50 dark:bg-white/5 rounded-lg text-[#C9A24D]">
                <FiMapPin size={14} />
              </div>

              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">
                {location || "Dhaka, BD"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gray-50 dark:bg-white/5 rounded-lg text-[#C9A24D]">
                <FiBox size={14} />
              </div>

              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">
                Stock: {quantity}
              </span>
            </div>
          </div>

          {/* 4. Action Buttons Section */}

          <div className="mt-auto space-y-3">
            {/* View Details Button - Always Visible */}

            <Link to={`/product-details/${_id}`} className="block">
              <button className="w-full py-4 bg-[#0A2540] dark:bg-white/5 text-white dark:text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-[#C9A24D] hover:text-[#0A2540] transition-all tracking-widest text-[10px] uppercase border border-[#C9A24D]/20 shadow-lg group/btn">
                View Details
                <FiArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </Link>

            {/* Delete & Update Buttons - Only for Admin/Seller */}

            {role === "admin" || role === "seller" ? (
              <div className="grid grid-cols-2 gap-3">
                <Link to={`/update-product/${_id}`} className="block">
                  <button className="w-full py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase hover:bg-blue-600 hover:text-white transition-all border border-blue-100 dark:border-blue-900/30">
                    <FiEdit size={14} /> Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(_id)}
                  className="w-full py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase hover:bg-red-600 hover:text-white transition-all border border-red-100 dark:border-red-900/30"
                >
                  <FiTrash2 size={14} /> Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
