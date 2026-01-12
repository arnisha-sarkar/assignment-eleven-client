import React from "react";
import { NavLink } from "react-router";

const MenuItem = ({ label, address }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform ${
          isActive
            ? "bg-[#C9A24D] dark:bg-[#C9A24D] dark:text-[#0A2540]  text-[#FFFFFF]"
            : "text-gray-600 dark:text-white"
        }`
      }
    >
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
