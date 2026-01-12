import React, { useState } from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AllProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
      return result.data;
    },
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  // --- Pagination Logic ---
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20">
      <Container>
        {/* Filter Section */}
        <div className="pt-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mt-5">
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="flex gap-4">
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none"
            >
              <option value="default">Sort by Price</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {currentProducts.length > 0 ? (
          <>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination UI*/}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiChevronLeft size={20} />
                </button>

                {[...Array(totalPages).keys()].map((number) => (
                  <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      currentPage === number + 1
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "border-gray-300 dark:border-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No products found!
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllProduct;

// import React, { useState } from "react";
// import Container from "../../components/Shared/Container";
// import ProductCard from "../../components/Card/ProductCard";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "../../components/Shared/LoadingSpinner";
// import { FiSearch, FiFilter } from "react-icons/fi";

// const AllProduct = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOrder, setSortOrder] = useState("default");

//   const { data: products = [], isLoading } = useQuery({
//     queryKey: ["all-product"],
//     queryFn: async () => {
//       const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
//       return result.data;
//     },
//   });

//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   const filteredProducts = products
//     .filter((product) => {
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const matchesCategory =
//         selectedCategory === "All" || product.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     })
//     .sort((a, b) => {
//       if (sortOrder === "lowToHigh") return a.price - b.price;
//       if (sortOrder === "highToLow") return b.price - a.price;
//       return 0;
//     });

//   if (isLoading) return <LoadingSpinner />;

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20">
//       <Container>
//         {/* filteter section */}
//         <div className="pt-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-[#F5F2EE] dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mt-5">
//           {/* search bar*/}
//           <div className="relative w-full md:w-1/3">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name..."
//               className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#1A1A1A] dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* category filter */}
//           <div className="flex gap-4 w-full md:w-auto">
//             <select
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none cursor-pointer"
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>

//             {/* sort */}
//             <select
//               onChange={(e) => setSortOrder(e.target.value)}
//               className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none cursor-pointer"
//             >
//               <option value="default">Sort by Price</option>
//               <option value="lowToHigh">Price: Low to High</option>
//               <option value="highToLow">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* --- display product --- */}
//         {filteredProducts.length > 0 ? (
//           <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 text-gray-500 dark:text-gray-400">
//             <p className="text-xl font-semibold">
//               No products found for this filter!
//             </p>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default AllProduct;
