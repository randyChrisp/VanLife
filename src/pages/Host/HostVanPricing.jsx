import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { hostVanDetail } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${hostVanDetail.price}
      <span>/day</span>
    </h3>
  );
};

export default HostVanPricing;
