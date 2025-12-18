import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";
const feedbacks = [
  {
    id: 1,
    name: "Rahim Uddin",
    comment: "Excellent quality garments and fast delivery!",
  },
  {
    id: 2,
    name: "Karima Akter",
    comment: "Very professional service. Highly recommended.",
  },
  {
    id: 3,
    name: "Jahid Hasan",
    comment: "Production quality was top-notch and reliable.",
  },
];

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="my-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          Customer Feedback
        </motion.h1>

        <div className="max-w-xl mx-auto border rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-600 italic mb-4">
            "{feedbacks[index].comment}"
          </p>
          <h3 className="font-semibold">— {feedbacks[index].name}</h3>
        </div>
      </div>
    </Container>
  );
};

export default CustomerFeedback;
