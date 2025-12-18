import React from "react";
import { BsFingerprint } from "react-icons/bs";
import MenuItem from "../../../Menu/MenuItem";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFingerprint} label="My Orders" address="my-orders" />
      {/* <MenuItem
        icon={BsFingerprint}
        label="Track Order"
        address="track-order/:id"
      /> */}
    </>
  );
};

export default CustomerMenu;
