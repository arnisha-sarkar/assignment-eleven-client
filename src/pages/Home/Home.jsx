import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Home/Banner";
import Brands from "../../components/Home/Brands/Brands";
import Customer from "../../components/Home/Customer/Customer";
import OurProducts from "../../components/Home/OurProducts";
import HowItWork from "../../components/Home/HoItWork";
import CustomerFeedback from "../../components/Home/CustomerFeedback";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <OurProducts />
        <HowItWork />
        <CustomerFeedback />
        <Brands />
        <Customer />
      </Container>
    </div>
  );
};

export default Home;
