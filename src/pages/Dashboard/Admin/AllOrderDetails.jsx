// const AllOrderDetails = () => {
//   return (
//     <div className="container mx-auto px-4 sm:px-8 py-8">
//       <h2 className="text-2xl font-bold mb-4">Order Details</h2>

//       <div className="bg-white shadow rounded p-6">
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <img src="" alt="" />
//             <p>
//               <strong>Order ID:</strong>
//             </p>
//             <p>
//               <strong>Product Name:</strong>
//             </p>
//             <p>
//               <strong>Category:</strong>
//             </p>
//             <p>
//               <strong>Quantity:</strong>
//             </p>
//           </div>

//           <div>
//             <p>
//               <strong>Status:</strong>
//             </p>
//             <p>
//               <strong>Payment:</strong>
//             </p>
//             <p>
//               <strong>Customer Email:</strong>
//             </p>
//           </div>
//         </div>

//         {/* <div className="mt-4">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-40 w-40 object-cover rounded"
//           />
//         </div> */}

//         {/* Optional: Tracking history or additional info */}
//         {/* <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2">Tracking History</h3>
//           {product.tracking && product.tracking.length > 0 ? (
//             <ul className="list-disc pl-5">
//               {product.tracking.map((step, index) => (
//                 <li key={index}>
//                   {step.date}: {step.status} {step.note && `- ${step.note}`}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No tracking information available.</p>
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AllOrderDetails;

import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { useParams } from "react-router";

const AllOrderDetails = () => {
  const { id } = useParams(); // get order id from URL

  const { data: order, isLoading } = useQuery({
    queryKey: ["order-details", id],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/orders/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  console.log(order);
  if (isLoading) return <LoadingSpinner />;

  if (!order) return <p className="text-center mt-10">Order not found!</p>;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Details</h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Top Section: Image + Product Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Product Image */}
          <div className="md:w-1/3 flex justify-center items-center">
            <img
              src={order.image}
              alt={order.name}
              className="h-48 w-48 object-cover rounded-lg shadow"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-3">{order.name}</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Order ID:</span> {order._id}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Category:</span> {order.category}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Quantity:</span> {order.quantity}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Price:</span> ${order.price}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-white ${
                  order.status === "Pending"
                    ? "bg-yellow-500"
                    : order.status === "Approved"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {order.status}
              </span>
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Payment:</span> {order.payment}
            </p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-xl font-semibold mb-3 text-gray-800">
            Customer Information
          </h4>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Name:</span>{" "}
            {order.customerName || "N/A"}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Email:</span> {order.customer}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Contact:</span>{" "}
            {order.contactNumber || "N/A"}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Delivery Address:</span>{" "}
            {order.deliveryAddress || "N/A"}
          </p>
        </div>

        {/* Optional: Additional Notes */}
        {order.additionalNotes && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              Additional Notes
            </h4>
            <p className="text-gray-700">{order.additionalNotes}</p>
          </div>
        )}

        {/* Tracking History */}
        {order.tracking && order.tracking.length > 0 && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Tracking History
            </h4>
            <ul className="list-disc pl-5">
              {order.tracking.map((step, index) => (
                <li key={index} className="mb-1">
                  <span className="font-medium">{step.date}:</span>{" "}
                  {step.status} {step.note && `- ${step.note}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrderDetails;
