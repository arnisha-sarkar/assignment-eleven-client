import React from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
const AllProduct = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
      return result.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Container>
        {products && products.length > 0 ? (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default AllProduct;

// -------------------------------

// import React, { useState } from "react";
// import Container from "../../components/Shared/Container";
// import ProductCard from "../../components/Card/ProductCard";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "../../components/Shared/LoadingSpinner";

// const ITEMS_PER_PAGE = 6;

// const AllProduct = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const { data, isLoading } = useQuery({
//     queryKey: ["all-product", currentPage],
//     queryFn: async () => {
//       const res = await axios.get(
//         `${
//           import.meta.env.VITE_API_URL
//         }/all-product?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
//       );
//       return res.data;
//     },
//     keepPreviousData: true,
//   });

//   if (isLoading) return <LoadingSpinner />;

//   const products = data?.products || [];
//   const totalProducts = data?.totalProducts || 0;
//   const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

//   return (
//     <div>
//       <Container>
//         {/* Product Grid */}
//         {products.length > 0 && (
//           <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-2 mt-10">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((prev) => prev - 1)}
//               className="px-4 py-2 border rounded disabled:opacity-50"
//             >
//               Prev
//             </button>

//             {[...Array(totalPages).keys()].map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page + 1)}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === page + 1 ? "bg-lime-500 text-white" : ""
//                 }`}
//               >
//                 {page + 1}
//               </button>
//             ))}

//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((prev) => prev + 1)}
//               className="px-4 py-2 border rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default AllProduct;
