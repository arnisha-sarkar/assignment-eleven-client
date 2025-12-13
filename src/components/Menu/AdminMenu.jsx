import React from "react";
import { FaUserCog, FaUserTag } from "react-icons/fa";
import MenuItem from "./MenuItem";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem icon={FaUserTag} label="AllProducts" address="all-products" />
      <MenuItem icon={FaUserTag} label="AllOrders" address="all-orders" />
    </>
  );
};

export default AdminMenu;
