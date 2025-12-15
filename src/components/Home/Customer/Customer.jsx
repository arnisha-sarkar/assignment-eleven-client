import React from "react";
import Container from "../../Shared/Container";
import customer from "../../../assets/customer.webp";
const Customer = () => {
  return (
    <div>
      <Container>
        <div className="flex mt-12 gap-9">
          <div className="w-[50%] flex flex-col justify-center">
            <h2 className="text-2xl">Serving Customers With Care</h2>
            <p className="mt-6">
              We prioritize our customers’ satisfaction. From placing orders to
              receiving your garments, our dedicated support ensures a smooth
              and enjoyable shopping experience every step of the way.Hear
              directly from our satisfied customers! From premium quality
              garments to on-time delivery, our clients share their experiences
              to help you shop with confidence.
            </p>
          </div>
          <div className="w-[50%]">
            <img src={customer} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
