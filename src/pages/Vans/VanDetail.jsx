import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const VanDetail = () => {
  const [vanDetail, setVanDetail] = useState("");
  const params = useParams();
  const location = useLocation();
  console.log("Location", location);

  useEffect(() => {
    try {
      fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVanDetail(data.vans));
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {vanDetail ? (
        <div className="van-detail">
          <img src={vanDetail.imageUrl} />
          <i className={`van-type ${vanDetail.type} selected`}>
            {vanDetail.type}
          </i>
          <h2>{vanDetail.name}</h2>
          <p className="van-price">
            <span>${vanDetail.price}</span>/day
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default VanDetail;
