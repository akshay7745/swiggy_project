import { useEffect, useState } from "react";

const useFetch = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdate = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&page_type=DESKTOP_WEB_LISTING"
      );
      const actData = await res.json();
      setRestaurants(actData?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(actData?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  return [restaurants, filterRestaurants, err, setFilterRestaurants];
};
export default useFetch;
