import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";

const SellerOrderDataRow = ({ product, refetch }) => {
  console.log(product);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { image, name, price, payment } = product || {};

  return (
    <tr>
      {/* Image */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          src={image}
          alt="product"
          className="h-10 w-10 object-cover rounded"
        />
      </td>

      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{name}</p>
      </td>

      {/* Price */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">${price}</p>
      </td>

      {/* Payment */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{payment}</p>
      </td>

      {/* Actions */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-2">
          {/* Delete */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm"
          >
            Delete
          </button>

          {/* Update */}
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm"
          >
            Update
          </button>
        </div>

        <DeleteModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          product={product}
          refetch={refetch}
        />

        <UpdateProductModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          product={product}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
