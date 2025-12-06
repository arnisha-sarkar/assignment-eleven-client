import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, classname, children }) => {
  return (
    <NavLink
      to={to}
      classname={({ isActive }) =>
        isActive ? "text-purple-500" : `${classname} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
