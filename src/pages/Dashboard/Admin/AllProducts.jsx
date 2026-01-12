import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllProductsData from "../../../components/Dashboard/TableRows/AllProductsData";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const AllProducts = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
      return result.data;
    },
  });
  console.log(products);
  if (isLoading) return <LoadingSpinner />;
  return (
    // <div className="container mx-auto px-4 sm:px-8">
    //   <div className="py-8">
    //     <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    //       <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    //         <table className="min-w-full leading-normal">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Image
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Product Name
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Price
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Category
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Created By
    //               </th>
    //               {/* <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Payment Mode
    //               </th> */}

    //               {/* <th
    //                 scope="col"
    //                 className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
    //               >
    //                 Actions
    //               </th> */}
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {products.map((product) => (
    //               <AllProductsData key={product._id} product={product} />
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="flex flex-col md:table-row mb-4 md:mb-0 border border-gray-200 md:border-none bg-white rounded-lg md:rounded-none shadow-sm md:shadow-none overflow-hidden">
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Image
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Product Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Category
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Created By
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Show on Home
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <AllProductsData
                    key={product._id}
                    product={product}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
