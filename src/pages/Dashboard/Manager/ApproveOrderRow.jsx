import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const ApproveOrderRow = ({ order, refetch }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { _id, name, quantity, createdAt, customer } = order;

  const handleApprove = async () => {
    try {
      setLoading(true);
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/orders/approve/${_id}`
      );
      toast.success("Order Approved ✅");
      refetch();
    } catch (error) {
      toast.error("Failed to approve order");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    try {
      setLoading(true);
      await axios.patch(`${import.meta.env.VITE_API_URL}/orders/reject/${_id}`);
      toast.error("Order Rejected ❌");
      refetch();
    } catch (error) {
      toast.error("Failed to reject order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr>
      <td className="px-4 py-2 border">{_id}</td>
      <td className="px-4 py-2 border">{customer}</td>
      <td className="px-4 py-2 border">{name}</td>
      <td className="px-4 py-2 border">{quantity}</td>
      <td className="px-4 py-2 border">
        {createdAt ? new Date(createdAt).toLocaleDateString() : "N/A"}
      </td>

      <td className="px-4 py-2 border space-x-2">
        <button
          disabled={loading}
          onClick={handleApprove}
          className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Approve
        </button>

        <button
          disabled={loading}
          onClick={handleReject}
          className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
        >
          Reject
        </button>

        <button
          onClick={() => navigate(`/dashboard/order-details/${_id}`)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default ApproveOrderRow;
