// import React from "react";
// import Container from "../Shared/Container";

// const OurProducts = () => {
//   return (
//     <Container>
//       <div>
//         <h1 className="text-2xl text-center my-10 font-bold">Our Products</h1>
//       </div>
//     </Container>
//   );
// };

// export default OurProducts;

import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import { Link } from "react-router";
import { motion } from "framer-motion";
const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/six-card")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Container>
      <div className="my-16">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl text-center font-bold mb-10"
        >
          Our Products
        </motion.h1>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={product._id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded"
                />

                {/* Name */}
                <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

                {/* Short Description */}
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>

                {/* Price */}
                <p className="font-bold mt-2">$ {product.price}</p>

                {/* View Details Button */}
                <Link to={`/product-details/${product._id}`}>
                  <button className="btn btn-primary btn-sm mt-4 w-full">
                    View Details
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products available
          </p>
        )}
      </div>
    </Container>
  );
};

export default OurProducts;
