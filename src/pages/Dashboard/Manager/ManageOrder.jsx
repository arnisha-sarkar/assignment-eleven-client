import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import axios from "axios";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";

const ManageOrder = () => {
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
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // 🛡️ Safe filter
  const filteredProducts = products.filter((product) => {
    const search = searchText.toLowerCase();
    return (
      product?.name?.toLowerCase().includes(search) ||
      product?.category?.toLowerCase().includes(search)
    );
  });

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
            className="w-full md:w-1/3 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold">
                    Image
                  </th>
                  <th className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold">
                    Payment Mode
                  </th>
                  <th className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold">
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
                    <td
                      colSpan="5"
                      className="text-center py-10 text-gray-500 bg-white"
                    >
                      No products found. Add some products first!
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
