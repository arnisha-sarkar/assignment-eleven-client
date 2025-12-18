import React from "react";
import ApproveOrderRow from "./ApproveOrderRow";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ApproveOrders = () => {
  const {
    data: orders = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["orders", "pending"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/pending-orders`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return <p className="text-center text-red-500">Failed to load orders</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Pending Orders</h2>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Order Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No pending orders found
              </td>
            </tr>
          )}

          {orders.map((order) => (
            <ApproveOrderRow key={order._id} order={order} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveOrders;
