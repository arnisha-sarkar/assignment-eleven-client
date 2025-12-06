import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Home/Banner";
import Brands from "../../components/Home/Brands/Brands";
import Customer from "../../components/Home/Customer/Customer";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <Brands />
        <Customer />
        <h1>this is home</h1>
      </Container>
    </div>
  );
};

export default Home;
