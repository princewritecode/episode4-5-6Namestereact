import { image_url } from "../../utils/constant.js";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    console.log();
    return (
        <>
            <div className="restaurant-card">
                <img src={
                    image_url +
                    cloudinaryImageId
                }></img>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating}</h4>
                <span></span>
            </div >
        </>);
};
export default RestaurantCard;