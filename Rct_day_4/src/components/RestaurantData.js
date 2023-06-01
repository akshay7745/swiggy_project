import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "./constants";
import useRestaurantCard from "../utils/useRestaurantCard";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantData = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurantCard(id);
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("orange"));
  };
  return restaurantMenu ? (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="border-2 border-purple-300 rounded-md bg-purple-50 shadow-lg flex p-4">
        <div className="mr-11">
          <img
            src={
              IMG_CDN_LINK +
              restaurantMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt="logo"
            className="w-72 block m-[auto]"
          />
          <h1 className="text-2xl text font-bold text-center mb-2 mt-2 ">
            {restaurantMenu?.cards[0]?.card?.card?.info?.name}
          </h1>
          <h1 className="font-bold text-lg">
            Cuisines:
            {restaurantMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </h1>
          <h2 className="font-semibold text-lg">{`₹ ${
            restaurantMenu?.cards[0]?.card?.card?.info?.costForTwo / 100
          } for two`}</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg text-center"> Menu</h2>
          <ul className="font-semibold text-sm">
            {restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (ele) => (
                <li>
                  {ele?.card?.card?.title === undefined
                    ? null
                    : ele?.card?.card?.title === "Recommended"
                    ? null
                    : `- ${ele?.card?.card?.title}`}
                </li>
              )
            )}
            <li onClick={handleAddItems}>Add Items</li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="w-[550px] h-[420px] border-grey rounded-md bg-none border-2 grid grid-cols-2 gap-4 p-4">
        <div className="w-64 m-[auto] mt-1">
          <div className="h-44  bg-slate-300 mt-1 rounded mb-4"></div>
          <div className="h-8 bg-slate-300 mt-7 rounded mb-5"></div>
          <div className="h-5 bg-slate-300 rounded mb-5"></div>
          <div className="h-5 bg-slate-300 rounded mb-5"></div>
          <div className="h-5 bg-slate-300 rounded"></div>
        </div>
        <div className="w-48 m-[auto] mt-2">
          <div className="h-7 bg-slate-300 rounded mb-7"></div>
          <div className="h-4 bg-slate-300 rounded mb-5"></div>
          <div className="h-4 bg-slate-300 rounded mb-5"></div>
          <div className="h-4 bg-slate-300 rounded mb-5"></div>
          <div className="h-4 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantData;
