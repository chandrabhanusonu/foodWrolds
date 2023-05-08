import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerUI from "./ShimmerUI";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9810451&lng=72.82675789999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
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
