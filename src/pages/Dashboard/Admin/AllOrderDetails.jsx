import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

import {
  FaArrowLeft,
  FaTruck,
  FaUser,
  FaStore,
  FaInfoCircle,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

const AllOrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: order, isLoading } = useQuery({
    queryKey: ["order-details", id],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/orders/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner />;
  if (!order)
    return <p className="text-center mt-10 text-red-500">Order not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 font-semibold mb-6 hover:text-indigo-800 transition-all"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT SIDE: Product & Seller Info --- */}
        <div className="lg:col-span-2 space-y-6">
          {/* 1. Main Product Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={order.image}
                  alt={order.name}
                  className="h-full w-full object-cover min-h-[250px]"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {order.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-indigo-600 font-medium text-sm mt-1">
                  {order.category}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">
                      Price per Unit
                    </p>
                    <p className="text-xl font-bold text-gray-700">
                      ${order.price}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">
                      Ordered Qty
                    </p>
                    <p className="text-xl font-bold text-gray-700">
                      {order.quantity} Units
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <FaInfoCircle className="text-indigo-500" /> Description
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {order.description ||
                      "No description available for this garment product."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Customer & Shipping Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4 border-b pb-2">
              <FaUser className="text-blue-500" /> Customer & Shipping
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p>
                  <span className="text-gray-400">Customer Email:</span> <br />{" "}
                  <span className="font-medium text-gray-700">
                    {order.customer}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Payment Option:</span> <br />{" "}
                  <span className="font-medium text-indigo-600">
                    {order.payment || "Bank Transfer"}
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-400">Shipping Address:</span>{" "}
                  <br />{" "}
                  <span className="font-medium text-gray-700">
                    {order.address || "Dhaka, Bangladesh"}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Min. Order Qty (MOQ):</span>{" "}
                  <br />{" "}
                  <span className="font-medium text-gray-700">
                    {order.moq || 100} Units
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrderDetails;
