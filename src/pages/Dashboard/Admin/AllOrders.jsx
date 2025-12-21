// import React from "react";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import AllOrderData from "../../../components/Dashboard/TableRows/AllOrderData";

// const AllOrders = () => {
//   const { data: orders = [], isLoading } = useQuery({
//     queryKey: ["all-orders"],
//     queryFn: async () => {
//       const res = await axios(`${import.meta.env.VITE_API_URL}/all-orders`);
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   return (
//     <div className="container mx-auto px-4 sm:px-8">
//       <div className="py-8">
//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     Order ID
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     User
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     Product
//                   </th>

//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     Quantity
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     Status
//                   </th>

//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                   >
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <AllOrderData key={order._id} order={order} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllOrders;

// -----------------------------

import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AllOrderData from "../../../components/Dashboard/TableRows/AllOrderData";

const AllOrders = () => {
  const [searchText, setSearchText] = useState(""); // সার্চ টেক্সটের জন্য স্টেট
  const [filterStatus, setFilterStatus] = useState(""); // ফিল্টার স্ট্যাটাসের জন্য স্টেট

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["all-orders"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/all-orders`);
      return res.data;
    },
  });

  // ফিল্টারিং লজিক: সার্চ টেক্সট এবং স্ট্যাটাস দুটির ওপর ভিত্তি করে ফিল্টার হবে
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order._id.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customer?.toLowerCase().includes(searchText.toLowerCase()); // Order ID বা Customer Email দিয়ে সার্চ

    const matchesStatus = filterStatus === "" || order.status === filterStatus; // স্ট্যাটাস ফিল্টার

    return matchesSearch && matchesStatus;
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-5">All Orders Management</h2>

        {/* --- Search & Filter Section --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* সার্চ ইনপুট */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by Order ID or User Email..."
              onChange={(e) => setSearchText(e.target.value)}
              className="w-[70%] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm"
            />
          </div>

          {/* স্ট্যাটাস ফিল্টার ড্রপডাউন */}
          <div className="w-full md:w-64">
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm bg-white"
            >
              <option value="">All Status (Filter By)</option>
              <option value="pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
        {/* --- End Search & Filter --- */}

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden border border-gray-200">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-bold">
                    Order ID
                  </th>
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-bold">
                    User
                  </th>
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-bold">
                    Product
                  </th>
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-center text-xs uppercase font-bold">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-bold">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-bold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* ম্যাপ করার সময় filteredOrders ব্যবহার করা হয়েছে */}
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <AllOrderData key={order._id} order={order} />
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-10 text-gray-500 font-medium"
                    >
                      No orders found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
