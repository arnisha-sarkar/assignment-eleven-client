import React from "react";
import Container from "../../Shared/Container";
import customer from "../../../assets/banner.jpg";
const Customer = () => {
  return (
    <div>
      <Container>
        <div className="flex">
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              praesentium debitis ipsam, fuga itaque quaerat eveniet quae est.
              Consequatur ab libero quis dolores autem ex veritatis corporis
              dignissimos praesentium. Dolor?
            </p>
          </div>
          <div>
            <img src={customer} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
