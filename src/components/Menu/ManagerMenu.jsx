import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
const ManagerMenu = () => {
  return (
    <div>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Product"
        address="add-product"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Products"
        address="manage-orders"
      />
      <MenuItem
        icon={MdHomeWork}
        label="Pending Orders"
        address="pending-orders"
      />
      <MenuItem
        icon={MdHomeWork}
        label="Approve Orders"
        address="approve-orders"
      />
    </div>
  );
};

export default ManagerMenu;
