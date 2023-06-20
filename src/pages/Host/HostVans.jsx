import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/host/vans")
        .then((res) => res.json())
        .then((data) => setHostVans(data.vans));
    } catch (error) {
      console.error;
    }
  }, []);

  const hostVanElements = hostVans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of {van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
