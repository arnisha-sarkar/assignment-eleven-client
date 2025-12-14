import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";

const SellerOrderDataRow = ({ product, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { _id, image, name, price, payment } = product || {};

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              {/* <img alt="profile" src={image} /> */}
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{name}</p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">Indoor</p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">${price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">payment</p>
      </td>

      <div className="ml-0">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span
            onClick={openModal}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Delete</span>
          </span>
          <DeleteModal
            isOpen={isOpen}
            closeModal={closeModal}
            product={product}
            refetch={refetch}
          />
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span
            onClick={() => setIsEditModalOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Update</span>
          </span>
          <UpdateProductModal
            isOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
            product={product}
            refetch={refetch}
          />
        </td>
      </div>
    </tr>
  );
};

export default SellerOrderDataRow;
