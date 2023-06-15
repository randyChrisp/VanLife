import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HostVanDetail = () => {
  const [hostVanDetail, setHostVanDetail] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setHostVanDetail(data.vans));
    } catch (error) {
      console.log(error);
    }
    console.log("Host van", hostVanDetail);
  }, [params.id]);

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
              <h2>{hostVanDetail.name}</h2>
              <p className="van-price">
                <span>${hostVanDetail.price}</span>/day
              </p>
              <p>{hostVanDetail.description}</p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVanDetail;
