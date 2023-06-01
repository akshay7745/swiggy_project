import { useEffect, useState } from "react";
import { restaurantsData } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
const Body = () => {
  // const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [restaurants, filterRestaurants, err, setFilterRestaurants] =
    useFetch();
  const handleClick = (data) => {
    setFilterRestaurants(data);
  };
  return err ? (
    <h1>Something went wrong...</h1>
  ) : restaurants?.length !== 0 ? (
    <div className="mt-[100px]">
      <Search restaurantsData={restaurants} handleClick={handleClick} />
      <div className="grid grid-cols-6 gap-5 py-5">
        {filterRestaurants?.length === 0 ? (
          <h3>No restaurants found please try another one</h3>
        ) : (
          filterRestaurants?.map((resData) => (
            <Link to={`/restaurant/${resData?.data?.id}`}>
              <RestaurantCard resData={resData} key={resData?.data?.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  ) : (
    <div className="body-container mt-[100px]">
      <Search restaurantsData={restaurants} handleClick={handleClick} />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-6 gap-5 ">
          {Array(12)
            .fill(1)
            .map((ele) => (
              <div
                className="w-48 h-64 bg-none border-2 border-grey p-2 rounded-lg mt-5"
                key={Date.now() * Math.random()}
              >
                <div className="h-24 mt-1 mb-6 bg-slate-300 m-[auto] rounded"></div>
                <div className="h-4 mb-4 bg-slate-300 m-[auto] rounded"></div>
                <div className="h-4 mb-4 bg-slate-300 m-[auto] rounded"></div>
                <div className="h-4 mb-4 bg-slate-300 m-[auto] rounded"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
