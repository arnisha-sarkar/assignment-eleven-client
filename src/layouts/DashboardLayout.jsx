import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sideber from "../components/Dashboard/Sideber/Sideber";

const DashboardLayout = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    // লোকাল স্টোরেজে সেভ করে রাখা
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <Sideber />
      <div className="flex-1  md:ml-64">
        <div className="p-5 dark:bg-[#101828] py-10 min-h-[calc(100vh-68px)]">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
