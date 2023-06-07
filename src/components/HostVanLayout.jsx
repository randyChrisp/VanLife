import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostVanLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5647B7",
  };

  return (
    <>
      <nav className="">
        <NavLink
          to="/host/van/:id"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Details
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Pricing
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostVanLayout;
