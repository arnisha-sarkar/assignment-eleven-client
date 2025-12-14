// import React, { useState } from "react";
// import DeleteModal from "../../Modal/DeleteModal";
// import UpdateProductModal from "../../Modal/UpdateProductModal";

// const AllProductsData = ({ product, refetch }) => {
//   let [isOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }
//   function closeModal() {
//     setIsOpen(false);
//   }
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const { _id, image, name, price, category } = product || {};

//   return (
//     <tr>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <div className="flex items-center">
//           <div className="shrink-0">
//             <div className="block relative">
//               {/* <img alt="profile" src={image} /> */}
//               <img
//                 alt="profile"
//                 src={image}
//                 className="mx-auto object-cover rounded h-10 w-15 "
//               />
//             </div>
//           </div>
//         </div>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{name}</p>
//       </td>
//       {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">Indoor</p>
//       </td> */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">${price}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">{category}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">created by</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 ">show on</p>
//       </td>

//       <div className="ml-0">
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <span
//             onClick={openModal}
//             className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//           >
//             <span
//               aria-hidden="true"
//               className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//             ></span>
//             <span className="relative">Delete</span>
//           </span>
//           <DeleteModal
//             isOpen={isOpen}
//             closeModal={closeModal}
//             product={product}
//             refetch={refetch}
//           />
//         </td>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <span
//             onClick={() => setIsEditModalOpen(true)}
//             className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//           >
//             <span
//               aria-hidden="true"
//               className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
//             ></span>
//             <span className="relative">Update</span>
//           </span>
//           <UpdateProductModal
//             isOpen={isEditModalOpen}
//             setIsEditModalOpen={setIsEditModalOpen}
//           />
//         </td>
//       </div>
//     </tr>
//   );
// };

// export default AllProductsData;

import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";

const AllProductsData = ({ product, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { image, name, price, category } = product || {};

  return (
    <tr>
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

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        created by
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        show on
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
