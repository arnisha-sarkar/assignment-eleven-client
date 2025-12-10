import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";

const CustomerOrderDataRow = ({ order }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const { _id, image, name, category, price, quantity, status, payment } =
    order || {};

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{_id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{name}</p>
      </td> */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{category}</p>
      </td> */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">${price}</p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{status}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{payment}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
        {/* View Button */}
        <button
          // onClick={() => handleView(order.id)}
          className="inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
        >
          View
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => setIsOpen(true)}
          disabled={order.status !== "Pending"}
          className={`relative cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight
      ${order.status !== "Pending" ? "opacity-50 cursor-not-allowed" : ""}
    `}
        >
          <span className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
          <span className="relative">Cancel</span>
        </button>
      </td>

      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
        >
          <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
          <span className="relative cursor-pointer">Cancel</span>
        </button>

        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td> */}
    </tr>
  );
};

export default CustomerOrderDataRow;
