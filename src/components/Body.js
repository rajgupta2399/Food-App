import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import Swiper from "swiper";

const Body = () => {
  // Default Data
  // let resListRestaurant = [
  //   {
  //     info: {
  //       id: "831065",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 4.4,
  //       sla: {
  //         deliveryTime: 40,
  //         lastMileTravel: 1.4,
  //         serviceability: "SERVICEABLE",
  //         slaString: "40-45 mins",
  //         lastMileTravelString: "1.4 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "798674",
  //       name: "Wow! Momo",
  //       cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
  //       locality: "Chandni Chowk",
  //       areaName: "Omaxe Chowk",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "Tibetan",
  //         "Healthy Food",
  //         "Asian",
  //         "Chinese",
  //         "Snacks",
  //         "Continental",
  //         "Desserts",
  //         "Beverages",
  //       ],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 37,
  //         lastMileTravel: 1.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "35-40 mins",
  //         lastMileTravelString: "1.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "286518",
  //       name: "UBQ by Barbeque Nation",
  //       cloudinaryImageId: "ru7j7x8qqtvuzfuw7cdh",
  //       locality: "Janpath",
  //       areaName: "Janpath",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Barbecue",
  //         "Biryani",
  //         "Kebabs",
  //         "Mughlai",
  //         "Desserts",
  //       ],
  //       avgRating: 3.1,
  //       sla: {
  //         deliveryTime: 38,
  //         lastMileTravel: 5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "35-40 mins",
  //         lastMileTravelString: "5.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];
  // Local State variable by using react
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchRes, setSearchRes] = useState("");
  console.log(searchRes);

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);
  // console.log("Normal called")

  const fetchData = async () => {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body section1">
      <div className="filter">
        <div className="search-box">
          <input
            type="search"
            name="search"
            id="search"
            value={searchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the Restaurant and update the UI.

              const filteredRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchRes.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterLogic = filteredRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });

            setFilteredRestaurant(filterLogic);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <br />
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
