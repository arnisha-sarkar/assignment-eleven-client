import React from "react";

const ApproveOrderRow = ({ order, refetch }) => {
  return (
    <tr className="hover:bg-gray-50 border-b">
      <td className="px-4 py-3">{order._id}</td>
      <td className="px-4 py-3">{order.customer}</td>
      <td className="px-4 py-3">{order.name}</td>
      <td className="px-4 py-3 text-center">{order.quantity}</td>
      <td className="px-4 py-3">
        {order.approvedAt
          ? new Date(order.approvedAt).toLocaleDateString()
          : "N/A"}
      </td>
      <td className="px-4 py-3 text-center">
        {/* এখানে আপনার ট্র্যাকিং বা অন্য বাটন যোগ করবেন */}
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
          Track
        </button>
      </td>
    </tr>
  );
};

export default ApproveOrderRow;
