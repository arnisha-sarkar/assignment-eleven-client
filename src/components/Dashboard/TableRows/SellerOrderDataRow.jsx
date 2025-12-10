import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";

const SellerOrderDataRow = ({ product }) => {
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
    // <tr>
    //   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <div className="flex items-center">
    //       <div className="shrink-0">
    //         <div className="block relative">
    //           <img
    //             alt="profile"
    //             src={image}
    //             className="mx-auto object-cover rounded h-10 w-15 "
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </td>

    //   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <p className="text-gray-900">{name}</p>
    //   </td>
    //   {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <p className="text-gray-900">Indoor</p>
    //   </td> */}
    //   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <p className="text-gray-900">${price}</p>
    //   </td>
    //   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <p className="text-gray-900">{payment}</p>
    //   </td>
    //   {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     <p className="text-gray-900">5</p>
    //   </td> */}

    //   <div className="flex items-center gap-2">
    //     {/* <select
    //       required
    //       className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900  bg-white"
    //       name="category"
    //     > */}
    //     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <span
    //         onClick={openModal}
    //         className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
    //       >
    //         <span
    //           aria-hidden="true"
    //           className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
    //         ></span>
    //         <span className="relative">Delete</span>
    //       </span>
    //       <DeleteModal isOpen={isOpen} closeModal={closeModal} />
    //     </td>
    //     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //       <span
    //         onClick={() => setIsEditModalOpen(true)}
    //         className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
    //       >
    //         <span
    //           aria-hidden="true"
    //           className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
    //         ></span>
    //         <span className="relative">Update</span>
    //       </span>
    //       <UpdateProductModal
    //         isOpen={isEditModalOpen}
    //         setIsEditModalOpen={setIsEditModalOpen}
    //       />
    //     </td>
    //     {/* <Link
    //       to={`/dashboard/update-modal/${product._id}`}
    //       className="px-3 py-1 bg-blue-500 text-white rounded"
    //     >
    //       Update
    //     </Link> */}
    //     {/* <button className="px-3 py-1 bg-blue-500 text-white rounded">
    //       Delete
    //     </button> */}
    //     {/* <option value="Delivered">Deliver</option> */}
    //     {/* </select> */}
    //     {/* <button
    //       onClick={() => setIsOpen(true)}
    //       className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
    //     >
    //       <span
    //         aria-hidden="true"
    //         className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
    //       ></span>
    //       <span className="relative">Cancel</span>
    //     </button> */}
    //   </div>

    //   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //     {/* <button
    //       onClick={() => setIsOpen(true)}
    //       className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
    //     >
    //       <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
    //       <span className="relative cursor-pointer">{status}</span>
    //     </button> */}

    //     <DeleteModal isOpen={isOpen} closeModal={closeModal} />
    //   </td>
    // </tr>
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
          <DeleteModal isOpen={isOpen} closeModal={closeModal} />
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
          />
        </td>
      </div>
    </tr>
  );
};

export default SellerOrderDataRow;
