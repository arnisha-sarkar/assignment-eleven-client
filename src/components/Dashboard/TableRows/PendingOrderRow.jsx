import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const PendingOrderRow = ({ order, refetch }) => {
  const navigate = useNavigate();

  const { _id, userEmail, name, quantity, createdAt, seller } = order;
  console.log(order);
  const handleApprove = async () => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/orders/approve/${_id}`);
    toast.success("Order Approved ✅");
    refetch();
  };

  const handleReject = async () => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/orders/reject/${_id}`);
    toast.error("Order Rejected ❌");
    refetch();
  };

  return (
    <tr>
      <td className="px-4 py-2 border">{_id}</td>

      <td className="px-4 py-2 border">{order?.customer}</td>

      <td className="px-4 py-2 border flex items-center gap-2">
        {/* <img src={productImage} className="h-8 w-8 rounded" /> */}
        {name}
      </td>

      <td className="px-4 py-2 border">{quantity}</td>

      <td className="px-4 py-2 border">
        {new Date(order?.createdAt).toLocaleDateString()}
      </td>

      <td className="px-4 py-2 border space-x-2">
        <button
          onClick={handleApprove}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Approve
        </button>

        <button
          onClick={handleReject}
          className="px-3 py-1 bg-red-500 text-white rounded"
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

export default PendingOrderRow;
