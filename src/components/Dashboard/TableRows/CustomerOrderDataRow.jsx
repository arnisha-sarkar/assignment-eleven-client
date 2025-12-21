// // // import React, { useState } from "react";
// // // import DeleteModal from "../../Modal/DeleteModal";

// // // const CustomerOrderDataRow = ({ order }) => {
// // //   let [isOpen, setIsOpen] = useState(false);
// // //   const closeModal = () => setIsOpen(false);
// // //   const { _id, image, name, category, price, quantity, status, payment } =
// // //     order || {};

// // //   return (
// // //     <tr>
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{_id}</p>
// // //       </td>
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <div className="flex items-center">
// // //           <div className="shrink-0">
// // //             <div className="block relative">
// // //               <img
// // //                 alt="profile"
// // //                 src={image}
// // //                 className="mx-auto object-cover rounded h-10 w-15 "
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </td>

// // //       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{name}</p>
// // //       </td> */}
// // //       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{category}</p>
// // //       </td> */}
// // //       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">${price}</p>
// // //       </td> */}
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{quantity}</p>
// // //       </td>
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{status}</p>
// // //       </td>
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <p className="text-gray-900">{payment}</p>
// // //       </td>
// // //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
// // //         {/* View Button */}
// // //         <button
// // //           // onClick={() => handleView(order.id)}
// // //           className="inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
// // //         >
// // //           View
// // //         </button>

// // //         {/* Cancel Button */}
// // //         <button
// // //           onClick={() => setIsOpen(true)}
// // //           disabled={order.status !== "Pending"}
// // //           className={`relative cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight
// // //       ${order.status !== "Pending" ? "opacity-50 cursor-not-allowed" : ""}
// // //     `}
// // //         >
// // //           <span className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
// // //           <span className="relative">Cancel</span>
// // //         </button>
// // //       </td>

// // //       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// // //         <button
// // //           onClick={() => setIsOpen(true)}
// // //           className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
// // //         >
// // //           <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
// // //           <span className="relative cursor-pointer">Cancel</span>
// // //         </button>

// // //         <DeleteModal isOpen={isOpen} closeModal={closeModal} />
// // //       </td> */}
// // //     </tr>
// // //   );
// // // };

// // // export default CustomerOrderDataRow;

// // // // ----------------------------------------------

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import CustomerOrderDataRow from "./CustomerOrderDataRow";

// // // // const CustomerOrders = () => {
// // // //   const [orders, setOrders] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [filterStatus, setFilterStatus] = useState("All");

// // // //   const fetchOrders = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
// // // //       setOrders(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchOrders();
// // // //   }, []);

// // // //   const filteredOrders =
// // // //     filterStatus === "All"
// // // //       ? orders
// // // //       : orders.filter((order) => order.status === filterStatus);

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>

// // // //       {/* Filter */}
// // // //       <div className="mb-4">
// // // //         <label className="mr-2 font-semibold">Filter by Status:</label>
// // // //         <select
// // // //           value={filterStatus}
// // // //           onChange={(e) => setFilterStatus(e.target.value)}
// // // //           className="border px-2 py-1 rounded"
// // // //         >
// // // //           <option value="All">All</option>
// // // //           <option value="Pending">Pending</option>
// // // //           <option value="Approved">Approved</option>
// // // //           <option value="Rejected">Rejected</option>
// // // //         </select>
// // // //       </div>

// // // //       {/* Table */}
// // // //       <table className="min-w-full border">
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Order ID</th>
// // // //             <th>Product</th>
// // // //             <th>Quantity</th>
// // // //             <th>Status</th>
// // // //             <th>Payment</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {loading ? (
// // // //             <tr>
// // // //               <td colSpan="6" className="text-center p-4">
// // // //                 Loading...
// // // //               </td>
// // // //             </tr>
// // // //           ) : filteredOrders.length === 0 ? (
// // // //             <tr>
// // // //               <td colSpan="6" className="text-center p-4">
// // // //                 No orders found
// // // //               </td>
// // // //             </tr>
// // // //           ) : (
// // // //             filteredOrders.map((order) => (
// // // //               <CustomerOrderDataRow
// // // //                 key={order._id}
// // // //                 order={order}
// // // //                 refetch={fetchOrders}
// // // //               />
// // // //             ))
// // // //           )}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CustomerOrders;

// // // --------------------------------------

// // import React, { useState } from "react";
// // import DeleteModal from "../../Modal/DeleteModal";
// // import axios from "axios";
// // import toast from "react-hot-toast";

// // const CustomerOrderDataRow = ({ order, refetch }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const closeModal = () => setIsOpen(false);

// //   const handleCancelOrder = async () => {
// //     try {
// //       await axios.patch(
// //         `${import.meta.env.VITE_API_URL}/orders/reject/${order._id}`
// //       );
// //       toast.success("Order Cancelled!");
// //       closeModal();
// //       refetch(); // refresh data
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to cancel order");
// //     }
// //   };

// //   return (
// //     <tr>
// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //         {order._id}
// //       </td>

// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //         {order.name}
// //       </td>

// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //         {order.quantity}
// //       </td>

// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //         {order.status}
// //       </td>

// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //         {order.payment}
// //       </td>

// //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
// //         {/* Cancel button only for pending */}
// //         {order.status === "pending" && (
// //           <>
// //             <button
// //               onClick={() => setIsOpen(true)}
// //               className="px-3 py-1 font-semibold text-red-600 bg-red-100 rounded"
// //             >
// //               Cancel
// //             </button>

// //             <DeleteModal
// //               isOpen={isOpen}
// //               closeModal={closeModal}
// //               handleConfirm={handleCancelOrder}
// //               message="Are you sure you want to cancel this order?"
// //             />
// //           </>
// //         )}
// //       </td>
// //     </tr>
// //   );
// // };

// // export default CustomerOrderDataRow;

// // ----------------------------------

// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router";

// const CustomerOrderDataRow = ({ order, refetch }) => {
//   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
//   const { _id, image, name, quantity, status } = order || {};

//   const handleCancelOrder = async () => {
//     try {
//       const res = await axios.patch(
//         `${import.meta.env.VITE_API_URL}/orders/reject/${_id}`
//       );

//       if (res.data.modifiedCount > 0) {
//         toast.success("Order Cancelled!");
//         setIsConfirmOpen(false);
//         refetch(); // Refetch updated orders
//       } else {
//         toast.error("Failed to cancel order!");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error!");
//     }
//   };

//   return (
//     <tr>
//       {/* Product Image */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <img
//           alt={name}
//           src={image}
//           className="mx-auto object-cover rounded h-10 w-15"
//         />
//       </td>

//       {/* Product Name */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         {name}
//       </td>

//       {/* Quantity */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         {quantity}
//       </td>

//       {/* Status */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         {status}
//       </td>

//       {/* Payment */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         {order.transactionId}
//       </td>
//       {/* ✅ ACTION COLUMN */}
//       <td className="px-5 py-5 border-b bg-white text-sm">
//         <Link
//           to={`/dashboard/track-order/${_id}`}
//           className="text-blue-600 font-semibold hover:underline"
//         >
//           Track Order
//         </Link>
//       </td>
//       {/* Action */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
//         {/* View Button */}
//         <Link
//           to={`/dashboard/order-details/${order._id}`}
//           className="inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
//         >
//           View
//         </Link>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         {/* Cancel button only for pending orders */}
//         {status === "pending" && (
//           <button
//             onClick={() => setIsConfirmOpen(true)}
//             className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//           >
//             Cancel
//           </button>
//         )}

//         {/* Confirmation Modal */}
//         {isConfirmOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
//               <h2 className="text-lg font-bold mb-4">Confirm Cancel</h2>
//               <p className="mb-6">
//                 Are you sure you want to cancel this order?
//               </p>
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={handleCancelOrder}
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                 >
//                   Yes, Cancel
//                 </button>
//                 <button
//                   onClick={() => setIsConfirmOpen(false)}
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   No, Keep
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default CustomerOrderDataRow;

// --------------------------------------

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CustomerOrderDataRow = ({ order, refetch }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { _id, image, name, quantity, status, transactionId } = order || {};

  const handleCancelOrder = async () => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/orders/reject/${_id}`
      );

      // modifiedCount ১ বা তার বেশি হওয়া মানে ডাটাবেসে সাকসেসফুলি আপডেট হয়েছে
      if (res.data.modifiedCount > 0) {
        toast.success("Order Cancelled!");
        setIsConfirmOpen(false);

        // refetch() কল করলে TanStack Query বা আপনার Fetch ফাংশন নতুন ডেটা নিয়ে আসবে
        // ফলে status আর "pending" থাকবে না এবং বাটনটি রেন্ডার হবে না।
        refetch();
      } else {
        toast.error("Order already updated or failed!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          alt={name}
          src={image}
          className="mx-auto object-cover rounded h-10 w-15 border"
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-medium">
        {name}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        {quantity}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            status?.toLowerCase() === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : status?.toLowerCase() === "rejected"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-mono text-gray-500 text-center">
        {transactionId || "N/A"}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        <Link
          to={`/dashboard/track-order/${_id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Track Order
        </Link>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center gap-2">
        <Link
          to={`/dashboard/order-details/${_id}`}
          className="px-3 py-1.5 font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded hover:bg-blue-600 hover:text-white transition"
        >
          View
        </Link>

        {/* ✅ Case Insensitive check: "pending" বা "Pending" যাই আসুক কাজ করবে */}
        {status?.toLowerCase() === "pending" && (
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 font-semibold rounded hover:bg-red-600 hover:text-white transition"
          >
            Cancel
          </button>
        )}

        {/* 🚨 CANCEL CONFIRMATION MODAL */}
        {isConfirmOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                !
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Cancel Order?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Are you sure you want to cancel this order?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelOrder}
                  className="flex-1 py-2.5 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
                >
                  Yes, Cancel
                </button>
                <button
                  onClick={() => setIsConfirmOpen(false)}
                  className="flex-1 py-2.5 bg-gray-100 text-gray-600 rounded-lg font-bold hover:bg-gray-200"
                >
                  No, Keep
                </button>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
