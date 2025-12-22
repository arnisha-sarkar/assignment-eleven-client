import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ApproveOrderRow = ({ order, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrackingUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const status = form.status.value;
    const location = form.location.value;
    const note = form.note.value;

    const trackingData = { status, location, note };

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/orders/update-tracking/${order._id}`,
        trackingData
      );
      if (res.data.modifiedCount > 0) {
        toast.success("Tracking Updated!");
        setIsOpen(false);
        refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-50 border-b">
        <td className="px-4 py-3 text-xs font-mono">{order._id}</td>
        <td className="px-4 py-3">{order.customer}</td>
        <td className="px-4 py-3 font-medium">{order.name}</td>
        <td className="px-4 py-3 text-center">{order.quantity}</td>
        <td className="px-4 py-3">
          {order.approvedAt
            ? new Date(order.approvedAt).toLocaleDateString()
            : "N/A"}
        </td>
        <td className="px-4 py-3 text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs transition-colors"
          >
            Update Track
          </button>
          <div className="text-[10px] text-gray-500 mt-1">
            Status:{" "}
            <span className="text-blue-600 font-bold">
              {order.currentStatus || "Approved"}
            </span>
          </div>
        </td>
      </tr>

      {isOpen && (
        <div
          className="fixed inset-0 w-full h-full z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Update Tracking
            </h3>

            <form
              onSubmit={handleTrackingUpdate}
              className="space-y-4 text-left"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Production Status
                </label>
                <select
                  name="status"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Cutting Completed">Cutting Completed</option>
                  <option value="Sewing Started">Sewing Started</option>
                  <option value="Finishing">Finishing</option>
                  <option value="QC Checked">QC Checked</option>
                  <option value="Packed">Packed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Factory / Floor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Note
                </label>
                <textarea
                  name="note"
                  rows="2"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Optional details..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:bg-gray-400"
                >
                  {loading ? "Saving..." : "Save Status"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApproveOrderRow;
