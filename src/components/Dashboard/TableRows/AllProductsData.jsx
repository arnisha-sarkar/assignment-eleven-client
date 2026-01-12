import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";
import axios from "axios";
import toast from "react-hot-toast";

const AllProductsData = ({ product, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showOnHome, setShowOnHome] = useState(product.showOnHome || false);

  const { _id, image, name, price, category, seller } = product || {};
  console.log(product);
  const handleShowOnHomeChange = async () => {
    try {
      const newValue = !showOnHome;
      setShowOnHome(newValue);

      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/all-product/${_id}`,
        { showOnHome: newValue }
      );

      if (res.data.success) {
        if (newValue === true) {
          toast.success("Product added to Home Page ✅");
        } else {
          toast.error("Product removed from Home Page ❌");
        }
        refetch();
      }
    } catch (err) {
      console.error(err);
      setShowOnHome(showOnHome);
      toast.error("Server error ❌");
    }
  };

  return (
    <tr className="flex flex-col md:table-row mb-4 md:mb-0 border border-gray-200 md:border-none bg-white rounded-lg md:rounded-none shadow-sm md:shadow-none overflow-hidden">
      {/* Image */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          alt="product"
          src={image}
          className="mx-auto object-cover rounded h-10 w-15"
        />
      </td>

      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {name}
      </td>

      {/* Price */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        ${price}
      </td>

      {/* Category */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {category}
      </td>

      {/* Created By */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {seller?.name}
      </td>

      {/* Show on Home */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        <input
          type="checkbox"
          checked={showOnHome}
          onChange={handleShowOnHomeChange}
          className="w-5 h-5 cursor-pointer"
        />
      </td>

      {/* Actions */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2">
        {/* Delete */}
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-red-900"
        >
          Delete
        </span>

        <DeleteModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          product={product}
          refetch={refetch}
        />

        {/* Update */}
        <span
          onClick={() => setIsEditModalOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-green-900"
        >
          Update
        </span>

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

export default AllProductsData;
