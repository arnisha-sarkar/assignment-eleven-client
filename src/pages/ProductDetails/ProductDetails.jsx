// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router";
// import Container from "../../components/Shared/Container";
// import LoadingSpinner from "../../components/Shared/LoadingSpinner";
// import PurchaseModal from "../../components/Modal/PurchaseModal";
// import Button from "../../components/Button/Button";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();

//   const [isOpen, setIsOpen] = useState(false);

//   /* ------------------ Product Fetch ------------------ */
//   const { data: product = {}, isLoading } = useQuery({
//     queryKey: ["product", id],
//     queryFn: async () => {
//       const res = await axios(
//         `${import.meta.env.VITE_API_URL}/all-product/${id}`
//       );
//       return res.data;
//     },
//   });

//   /* ------------------ User Role Fetch ------------------ */
//   const { data: roleData = {}, isLoading: roleLoading } = useQuery({
//     queryKey: ["role", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axios(
//         `${import.meta.env.VITE_API_URL}/user/role/${user.email}`
//       );
//       return res.data;
//     },
//   });

//   const role = roleData?.role;

//   if (isLoading || roleLoading) return <LoadingSpinner />;

//   const {
//     image,
//     name,
//     description,
//     category,
//     price,
//     quantity,
//     moq,
//     payment,
//     seller,
//   } = product;

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleOrder = () => {
//     if (payment === "Cash on Delivery") {
//       toast.success("Order completed");
//     } else {
//       setIsOpen(true);
//     }
//   };

//   return (
//     <Container>
//       <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12 my-10 items-center">
//         {/* -------- Left Side (Image) -------- */}
//         <div className="flex-1">
//           <div className="overflow-hidden rounded-xl w-[450px] h-[450px] object-cover">
//             <img
//               className="object-cover w-full h-full transition duration-300"
//               referrerPolicy="no-referrer"
//               src={image}
//               alt="Product"
//             />
//           </div>
//         </div>

//         {/* -------- Right Side (Info) -------- */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
//           <p className="text-gray-500">Category: {category}</p>

//           <p className="text-neutral-500">{description}</p>

//           <div className="text-neutral-600 space-y-1">
//             <p>Available Quantity: {quantity} Units</p>
//             <p>Minimum Order Quantity: {moq} Units</p>
//             <p>Payment Option: {payment}</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <p className="font-semibold">Seller: {seller?.name}</p>
//             <img
//               className="w-8 h-8 rounded-full"
//               src={seller?.image}
//               alt="Seller"
//               referrerPolicy="no-referrer"
//             />
//           </div>

//           <h2 className="text-3xl font-bold text-gray-700">Price: ${price}</h2>

//           {/* -------- Order Button (Role Based) -------- */}
//           {user && role !== "admin" && role !== "seller" ? (
//             <Button label="Order" onClick={handleOrder} />
//           ) : (
//             <p className="text-red-500 text-sm font-medium">
//               Login as customer to place order.
//             </p>
//           )}

//           {/* -------- Purchase Modal -------- */}
//           {user && role !== "admin" && role !== "seller" && (
//             <PurchaseModal
//               product={product}
//               isOpen={isOpen}
//               closeModal={closeModal}
//             />
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProductDetails;

// -------------------------------------

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react"; // router-dom ব্যবহার করুন
import Container from "../../components/Shared/Container";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiInfo,
  FiUser,
  FiCreditCard,
  FiBox,
} from "react-icons/fi";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/all-product/${id}`
      );
      return res.data;
    },
  });

  const { data: roleData = {}, isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/user/role/${user.email}`
      );
      return res.data;
    },
  });

  const role = roleData?.role;
  if (isLoading || roleLoading) return <LoadingSpinner />;

  const {
    image,
    name,
    description,
    category,
    price,
    quantity,
    moq,
    payment,
    seller,
  } = product;

  const closeModal = () => setIsOpen(false);

  const handleOrder = () => {
    if (payment === "Cash on Delivery") {
      toast.success("Order completed successfully!");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0A2540] min-h-screen py-16 transition-colors duration-300">
      <Container>
        <div className="bg-white dark:bg-[#101828] rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
            {/* --- Left Side: Premium Image Showcase --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 w-full"
            >
              <div className="relative group overflow-hidden rounded-3xl bg-gray-50 dark:bg-[#0A2540] p-4 border border-gray-100 dark:border-gray-800 shadow-inner">
                <img
                  className="w-full h-[450px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  src={image}
                  alt={name}
                />
                <div className="absolute top-8 left-8 bg-[#C9A24D] text-[#0A2540] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {category}
                </div>
              </div>
            </motion.div>

            {/* --- Right Side: Product Information --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 space-y-6 w-full"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] dark:text-[#F5F2EE] leading-tight mb-2">
                  {name}
                </h1>
                <p className="text-[#C9A24D] font-medium flex items-center gap-2">
                  <FiInfo /> Premium Quality Guaranteed
                </p>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-[#C9A24D] pl-4 italic">
                {description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0A2540] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <FiBox className="text-[#C9A24D] text-xl" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      Stock
                    </p>
                    <p className="font-bold text-[#0A2540] dark:text-gray-200">
                      {quantity} Units
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0A2540] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <FiShoppingBag className="text-[#C9A24D] text-xl" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      Min Order
                    </p>
                    <p className="font-bold text-[#0A2540] dark:text-gray-200">
                      {moq} Units
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0A2540] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <FiCreditCard className="text-[#C9A24D] text-xl" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      Payment
                    </p>
                    <p className="font-bold text-[#0A2540] dark:text-gray-200">
                      {payment}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0A2540] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <FiUser className="text-[#C9A24D] text-xl" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      Seller
                    </p>
                    <p className="font-bold text-[#0A2540] dark:text-gray-200">
                      {seller?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-tighter">
                  Price
                </span>
                <h2 className="text-4xl font-black text-[#0A2540] dark:text-[#C9A24D]">
                  ${price}
                </h2>
              </div>

              {/* Action Area */}
              {/* <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                {user && role !== "admin" && role !== "seller" ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      label="Order Now"
                      onClick={handleOrder}
                      className="bg-[#C9A24D] text-white w-full py-5 rounded-2xl text-lg font-bold shadow-xl shadow-[#C9A24D]/20"
                    >
                      Order Now
                    </button>
                  </motion.div>
                ) : (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl">
                    <p className="text-red-500 text-sm font-semibold text-center uppercase tracking-widest">
                      Login as customer to place order.
                    </p>
                  </div>
                )}
              </div> */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                {/* এখানে role !== "manager" যোগ করা হয়েছে */}
                {user &&
                role !== "admin" &&
                role !== "seller" &&
                role !== "manager" ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={handleOrder}
                      className="bg-[#C9A24D] text-[#0A2540] w-full py-5 rounded-2xl text-lg font-black shadow-xl shadow-[#C9A24D]/20 uppercase tracking-widest transition-all hover:bg-[#b38f42]"
                    >
                      Order Now
                    </button>
                  </motion.div>
                ) : (
                  <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl">
                    <p className="text-red-500 dark:text-red-400 text-xs font-black text-center uppercase tracking-[0.1em]">
                      {user
                        ? `Privileged Role (${role}): You cannot place orders.`
                        : "Please login as a customer to place an order."}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modal remains same logic */}
        {user && role !== "admin" && role !== "seller" && (
          <PurchaseModal
            product={product}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
      </Container>
    </div>
  );
};

export default ProductDetails;
