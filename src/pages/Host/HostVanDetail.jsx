import React from "react";
import { getVan } from "../../api";
import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getVan(params.id);
}

const HostVanDetail = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5647B7",
  };

  const hostVanDetail = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVanDetail.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVanDetail.type}`}>
              {hostVanDetail.type}
            </i>
            <h3>{hostVanDetail.name}</h3>
            <h4>${hostVanDetail.price}/day</h4>
          </div>
        </div>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ hostVanDetail }} />
    </section>
  );
};

export default HostVanDetail;
