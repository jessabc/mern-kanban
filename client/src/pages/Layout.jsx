import { Outlet } from "react-router-dom";
import React from "react";
import User from "../components/Header/User";
import { useLocation } from "react-router-dom";

const Layout = () => {
  let location = useLocation();
  return (
    <div className=" text-slate-900 ">
      {(!location.pathname === "/login" ||
        !location.pathname === "/signup") && (
        <div className="flex dark:bg-zinc-800 dark:text-zinc-100 ">
          <User />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Layout;
