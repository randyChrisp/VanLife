import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { hostVanDetail } = useOutletContext();

  return <img className="host-van-detail-image" src={hostVanDetail.imageUrl} />;
};

export default HostVanPhotos;
