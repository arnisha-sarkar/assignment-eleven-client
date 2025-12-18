import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";
const HowItWork = () => {
  const steps = [
    {
      title: "Place Order",
      desc: "Customer places an order through our platform.",
    },
    {
      title: "Production Starts",
      desc: "Our factory begins garment production with quality materials.",
    },
    {
      title: "Quality Check",
      desc: "Each product goes through strict quality inspection.",
    },
    {
      title: "Delivery",
      desc: "Finished products are delivered on time to the customer.",
    },
  ];

  return (
    <Container>
      <div className="my-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={step.id}
              className="border rounded-lg p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-primary mb-3">
                {step.id}
              </div>
              <h2 className="font-semibold text-lg mb-2">{step.title}</h2>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWork;
