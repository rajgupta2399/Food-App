import React from "react";
import { CDN_URL } from "../utils/constants";

const resStyleCard = {
    fontFamily: "Poppins",
    textAlign: "left",
  };


const RestaurantCard = (props) => {
  // const {resName, rating, img, cuisine, time} = props
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="img">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
      </div>

      <div className="details" style={resStyleCard}>
        <h3>{name}</h3>
        <div className="rating">
          <h4>{avgRating}</h4>
          <span>
            <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
          </span>
        </div>
      </div>
      <div className="details">
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla.slaString}</h4>
      </div>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
