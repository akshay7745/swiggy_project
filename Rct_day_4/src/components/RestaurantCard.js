import { IMG_CDN_LINK } from "./constants";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, costFor } =
    resData.data;
  return (
    <div className="w-48  shadow-red-100 m-[auto] text-left border-2 border-purple-300 rounded-md bg-purple-50 shadow-lg p-1 ">
      <img
        className="w-44 block m-[auto] p-1"
        src={IMG_CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="font-semibold text-md">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold text-sm">{`₹ ${
        costForTwo / 100
      } For two`}</h4>
      <h5 className="text-sm font-semibold">{avgRating} Stars</h5>
    </div>
  );
};

export default RestaurantCard;
