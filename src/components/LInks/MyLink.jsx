import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#007aff]"
          : `${className} font-semibold text-gray-600   text-sm`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
