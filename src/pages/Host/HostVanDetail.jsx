import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5647B7",
  };

  const [hostVanDetail, setHostVanDetail] = useState({}); //Default was null and caused error, changed to empty object to resolve
  const params = useParams();

  useEffect(() => {
    try {
      fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setHostVanDetail(data.vans));
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  console.log("Host Van", hostVanDetail);

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        {hostVanDetail ? (
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
        ) : (
          <h2>Loading...</h2>
        )}
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
