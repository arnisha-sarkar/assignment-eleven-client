import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const TrackOrder = () => {
  const { id } = useParams();
  console.log(id);
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/orders/track/${id}`
        );
        setOrder(res.data);
      } catch (err) {
        console.error("Failed to fetch order", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (isLoading) return <LoadingSpinner />;

  // 🔹 tracking steps (fallback safe)
  const trackingSteps = order?.tracking || [];

  // 🔹 latest step index
  const latestIndex = trackingSteps.length - 1;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Track Order #{order?._id}</h2>

      {/* Order Summary */}
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <p>
          <strong>Product:</strong> {order?.name || "N/A"}
        </p>
        <p>
          <strong>Quantity:</strong> {order?.quantity || "N/A"}
        </p>
        <p>
          <strong>Current Status:</strong>{" "}
          <span className="text-lime-600 font-semibold">
            {order?.status || "Pending"}
          </span>
        </p>
      </div>

      {/* Timeline */}
      <h3 className="text-xl font-semibold mb-4">Order Progress Timeline</h3>

      <div className="bg-white shadow rounded-xl p-6">
        {trackingSteps.length === 0 ? (
          <p className="text-gray-500">No tracking updates available yet.</p>
        ) : (
          <ol className="relative border-l border-gray-300">
            {trackingSteps.map((step, index) => {
              const isLatest = index === latestIndex;

              return (
                <li key={index} className="mb-8 ml-6">
                  {/* Dot */}
                  <span
                    className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full text-white ${
                      isLatest ? "bg-lime-500" : "bg-gray-400"
                    }`}
                  >
                    ✓
                  </span>

                  {/* Content */}
                  <div
                    className={`p-4 rounded-lg ${
                      isLatest
                        ? "bg-lime-50 border border-lime-300"
                        : "bg-gray-50"
                    }`}
                  >
                    <h4
                      className={`font-semibold ${
                        isLatest ? "text-lime-700" : "text-gray-700"
                      }`}
                    >
                      {step.status || "Pending"}
                      {isLatest && (
                        <span className="ml-2 text-xs bg-lime-500 text-white px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {step.date ? new Date(step.date).toLocaleString() : "N/A"}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      📍 {step.location || "Unknown"}
                    </p>

                    {step.note && (
                      <p className="text-sm text-gray-600 mt-1">
                        📝 {step.note}
                      </p>
                    )}

                    {step.image && (
                      <img
                        src={step.image}
                        alt="Step"
                        className="mt-3 h-24 rounded"
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      {/* Optional Location */}
      {order?.currentLocation && (
        <div className="mt-10 bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Current Location</h3>
          <p className="text-gray-600">📍 {order.currentLocation}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
