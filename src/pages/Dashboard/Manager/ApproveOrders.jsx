import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// নিশ্চিত করুন এই পাথটি ঠিক আছে
import ApproveOrderRow from "../../../components/Dashboard/TableRows/ApproveOrderRow";

const ApprovedOrders = () => {
  const {
    data: orders = [],
    isLoading,
    isError,
    refetch, // refetch যোগ করা ভালো যদি কোনো আপডেট হয়
  } = useQuery({
    queryKey: ["orders", "approved"],
    queryFn: async () => {
      // ব্যাকএন্ডে '/approved-orders' অথবা আপনার তৈরি করা সঠিক এপিআই পাথ দিন
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/approved-orders-list`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load approved orders
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-green-600 border-b pb-2">
        Approved Orders (Production Tracking)
      </h2>
      <div className="overflow-x-auto shadow-sm rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border px-4 py-3 text-left">Order ID</th>
              <th className="border px-4 py-3 text-left">User</th>
              <th className="border px-4 py-3 text-left">Product</th>
              <th className="border px-4 py-3 text-center">Quantity</th>
              <th className="border px-4 py-3 text-left">Approved Date</th>{" "}
              {/* রিকোয়ারমেন্ট অনুযায়ী */}
              <th className="border px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No approved orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <ApproveOrderRow
                  key={order._id}
                  order={order}
                  refetch={refetch}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedOrders;
