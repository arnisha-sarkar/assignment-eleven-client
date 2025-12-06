import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
// import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const ManagerMenu = () => {
  return (
    <div>
      {/* <NavLink to="/add-plant">Add Product</NavLink> */}
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Product"
        address="add-product"
      />
      {/* <MenuItem icon={MdHomeWork} label="My Inventory" address="my-inventory" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Orders"
        address="manage-orders"
      /> */}
    </div>
  );
};

export default ManagerMenu;
