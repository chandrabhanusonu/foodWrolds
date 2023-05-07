import { useState } from "react";
import { restaurantList } from "../config";
import ResturantCard from "./ResturantCard";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");
  console.log(restaurants);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search "
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturantcard">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
