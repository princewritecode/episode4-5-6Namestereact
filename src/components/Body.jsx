import { restaurantList } from "../../utils/constants/constant";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
        <>
            <div className="search-container" >
                <input type="text" placeholder="search" className="search-input" />
                <button
                    className="search-btn">
                    Search
                </button>
            </div>

            <div className="toprated-restaurant"></div>

            <div className="rescard-container">
                {restaurantList.map((restaurant) => {
                    return < RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })
                }
            </div>
        </ >

    );
};
export default Body;