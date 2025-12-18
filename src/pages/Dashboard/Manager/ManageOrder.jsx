// // import React from "react";
// // import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
// // import { useQuery } from "@tanstack/react-query";
// // import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// // import axios from "axios";

// // const ManageOrder = () => {
// //   const {
// //     data: products = [],
// //     isLoading,
// //     refetch,
// //   } = useQuery({
// //     queryKey: ["all-product"],
// //     queryFn: async () => {
// //       const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
// //       return result.data;
// //     },
// //   });
// //   console.log(products);
// //   if (isLoading) return <LoadingSpinner />;
// //   return (
// //     <div className="container mx-auto px-4 sm:px-8">
// //       <div className="py-8">
// //         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
// //           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
// //             <table className="min-w-full leading-normal">
// //               <thead>
// //                 <tr>
// //                   <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Image
// //                   </th>
// //                   <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Name
// //                   </th>
// //                   {/* <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Category
// //                   </th> */}
// //                   <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Price
// //                   </th>
// //                   {/* <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Quantity
// //                   </th> */}
// //                   <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Payment Mode
// //                   </th>

// //                   <th
// //                     scope="col"
// //                     className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
// //                   >
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {products.map((product) => (
// //                   <SellerOrderDataRow
// //                     key={product._id}
// //                     product={product}
// //                     refetch={refetch}
// //                   />
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageOrder;

// // --------------------------------------

// import React, { useState } from "react";
// import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import axios from "axios";

// const ManageOrder = () => {
//   const [searchText, setSearchText] = useState("");

//   const {
//     data: products = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["all-product"],
//     queryFn: async () => {
//       const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
//       return result.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;

//   // 🔍 Search filter (name OR category)
//   const filteredProducts = products.filter(
//     (product) =>
//       product.name?.toLowerCase().includes(searchText.toLowerCase()) ||
//       product.category?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 sm:px-8">
//       <div className="py-8">
//         {/* 🔍 Search Input */}
//         <div className="mb-4 text-center">
//           <input
//             type="text"
//             placeholder="Search by name or category..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="w-full md:w-1/3 px-4 py-2 border rounded"
//           />
//         </div>

//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 <tr>
//                   <th className="px-5 py-3 bg-white border-b text-left text-sm">
//                     Image
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b text-left text-sm">
//                     Name
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b text-left text-sm">
//                     Price
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b text-left text-sm">
//                     Payment Mode
//                   </th>
//                   <th className="px-5 py-3 bg-white border-b text-left text-sm">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredProducts.length > 0 ? (
//                   filteredProducts.map((product) => (
//                     <SellerOrderDataRow
//                       key={product._id}
//                       product={product}
//                       refetch={refetch}
//                     />
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="text-center py-6 text-gray-500">
//                       No products found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrder;

// -------------------------------

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import axios from "axios";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";

const ManageOrder = () => {
  // 🔍 Search text should be STRING
  const [searchText, setSearchText] = useState("");

  // 📦 Fetch products
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
      return res.data.products; // 👈 must be array
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // 🛡️ Safe filter (only if products is array)
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
          product?.category?.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        {/* 🔍 Search Input */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded"
          />
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b text-left text-sm">
                    Image
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-left text-sm">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-left text-sm">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-left text-sm">
                    Payment Mode
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-left text-sm">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <SellerOrderDataRow
                      key={product._id}
                      product={product}
                      refetch={refetch}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
