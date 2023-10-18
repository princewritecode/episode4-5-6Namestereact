import { image_url } from "../../utils/constant.js";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    console.log();
    return (
        <>
            <div className="bg-gray-300 hover:bg-gray-400 m-4 p-4 w-52 rounded-lg  "  >
                <img className="rounded-lg" src={
                    image_url +
                    cloudinaryImageId
                }></img>
                <h2 className="font-bold py-4 text-lg">{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating}</h4>
                <span></span>
            </div >
        </>);
};
export default RestaurantCard;