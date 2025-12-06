import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#fff]"
          : `${className} font-semibold text-[#007bff] lg:text-lg md:text-base text-sm`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
