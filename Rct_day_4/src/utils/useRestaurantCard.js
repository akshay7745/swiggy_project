import { useState, useEffect } from "react";

const useRestaurantCard = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  console.log(restaurantMenu);
  const fetchAndRender = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&submitAction=ENTER`
      );
      const actData = await res.json();
      console.log(actData.data);
      setRestaurantMenu(actData?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAndRender();
  }, []);
  return restaurantMenu;
};

export default useRestaurantCard;
