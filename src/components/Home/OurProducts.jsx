// import React, { useEffect, useState } from "react"; // router-dom ব্যবহার নিশ্চিত করুন
// import { motion } from "framer-motion";
// import { FiArrowRight, FiTag } from "react-icons/fi";
// import Container from "../Shared/Container";
// import { Link } from "react-router";

// const OurProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/six-card`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   return (
//     <div className="bg-[#F8FAFC] dark:bg-[#101828] py-20 transition-colors duration-300">
//       <Container>
//         <div className="mb-16 text-center">
//           <motion.h4
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-xs mb-3"
//           >
//             Our Collection
//           </motion.h4>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE]"
//           >
//             Featured Products
//           </motion.h1>
//           <div className="w-24 h-1 bg-[#C9A24D] mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
//             {[1, 2, 3, 4].map((n) => (
//               <div
//                 key={n}
//                 className="h-96 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-3xl"
//               ></div>
//             ))}
//           </div>
//         )}

//         {/* Products Grid */}
//         {!loading && products.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product._id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group relative bg-white dark:bg-[#101828] rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-gray-100">
//                   <motion.img
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Price Tag Badge */}
//                   <div className="absolute top-4 right-4 bg-[#0A2540]/80 dark:bg-[#C9A24D] backdrop-blur-md text-white dark:text-[#0A2540] px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
//                     <FiTag className="text-xs" />${product.price}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="px-2 py-6">
//                   <div className="flex justify-between items-start mb-2">
//                     <h2 className="text-xl font-bold text-[#0A2540] dark:text-[#F5F2EE] line-clamp-1">
//                       {product.name}
//                     </h2>
//                   </div>

//                   <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6">
//                     {product.description}
//                   </p>

//                   {/* Action Button */}
//                   <Link to={`/product-details/${product._id}`}>
//                     <motion.button
//                       whileTap={{ scale: 0.95 }}
//                       className="w-full py-4 bg-[#F5F2EE] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#C9A24D] font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-[#C9A24D] group-hover:text-white transition-all duration-300"
//                     >
//                       View Details
//                       <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && products.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-gray-500 text-xl font-medium">
//               No products available at the moment.
//             </p>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default OurProducts;

// ----------------------------------

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiTag,
  FiStar,
  FiLayers,
  FiCreditCard,
} from "react-icons/fi";
import Container from "../Shared/Container";
import { Link } from "react-router";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/six-card`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#101828] py-20 transition-colors duration-300">
      <Container>
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C9A24D] font-black tracking-[0.4em] uppercase text-[10px] mb-3"
          >
            Curated Selection
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0A2540] dark:text-white uppercase tracking-tight"
          >
            Featured Products
          </motion.h1>
          <div className="w-20 h-1.5 bg-[#C9A24D] mx-auto mt-6 rounded-full shadow-lg shadow-[#C9A24D]/20"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-[480px] bg-gray-200 dark:bg-white/5 animate-pulse rounded-[2.5rem]"
              ></div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white dark:bg-[#0A192F] rounded-[2.5rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5"
              >
                {/* 1. Image Container */}
                <div className="relative h-60 overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-white/5">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge: Category */}
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#C9A24D]">
                    {product.category || "New Arrival"}
                  </div>
                </div>

                {/* 2. Content Section (Flex grow makes cards equal height) */}
                <div className="px-2 py-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h2 className="text-xl font-black text-[#0A2540] dark:text-white line-clamp-1 mb-2">
                    {product.name}
                  </h2>

                  {/* Short Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed italic">
                    {product.description ||
                      "Premium quality product from our exclusive collection."}
                  </p>

                  {/* 3. Meta Info Section */}
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between border-t border-gray-50 dark:border-white/5 pt-4">
                      {/* Price */}
                      <div className="flex items-center gap-1.5 text-[#C9A24D]">
                        <span className="text-lg font-black">
                          ${product.price}
                        </span>
                      </div>
                      {/* Rating/Location Placeholder */}
                      <div className="flex items-center gap-1 text-gray-400">
                        <FiStar
                          className="text-yellow-500 fill-yellow-500"
                          size={12}
                        />
                        <span className="text-[10px] font-bold tracking-tighter">
                          4.8 (120+)
                        </span>
                      </div>
                    </div>

                    {/* Extra Meta: e.g. Payment or Stock */}
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest pb-4">
                      <span className="flex items-center gap-1">
                        <FiCreditCard /> {product.payment || "COD"}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiLayers /> In Stock
                      </span>
                    </div>

                    {/* 4. Action Button */}
                    <Link
                      to={`/product-details/${product._id}`}
                      className="block"
                    >
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-[#0A2540] dark:bg-white/5 text-[#C9A24D] dark:text-white font-black rounded-2xl flex items-center justify-center gap-2 group-hover:bg-[#C9A24D] group-hover:text-[#0A2540] transition-all duration-300 tracking-widest text-[10px] uppercase shadow-lg shadow-[#0A2540]/5"
                      >
                        View Details
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-white/5 rounded-[3rem]">
            <p className="text-gray-500 text-xl font-black uppercase tracking-[0.2em]">
              No products found
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OurProducts;
