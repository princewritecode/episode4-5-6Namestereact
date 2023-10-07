import { restaurantList } from "../../utils/constants/constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfrestaurant, setListOfRestaurant] = useState([]);
    const [newListOfRestaurant, setNewListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const fetchData = async () => {
        const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.694089521043757&lng=75.92940151436481&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await fetchData.json();
        console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setNewListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    useEffect(() => { fetchData(); }, []);
    return (
        <>
            <div className="search-container" >
                <input type="text" placeholder="search" className="search-input" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />
                <button
                    className="search-btn" onClick={() => {
                        //** filter the restaurant cards and update the ui */
                        console.log(searchText);
                        const filteredRestaurant = listOfrestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setNewListOfRestaurant(filteredRestaurant);
                    }}>
                    Search
                </button>
            </div>
            <div className="toprated-restaurant">
                <button className="toprated-btn" onClick={() => {
                    const filteredList = listOfrestaurant.filter((restaurant) => {
                        return restaurant.info.avgRating > 4;
                    });
                    setListOfRestaurant(filteredList);
                }}>Toprated Restaurant</button>
            </div>
            <div className="rescard-container">
                {newListOfRestaurant.map((restaurant) => {
                    return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> < RestaurantCard key={restaurant.info.id} {...restaurant.info} /></Link>;
                })
                }
            </div>
        </ >
    );
};
export default Body;