import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
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
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you're offline !! please check your internet connection</h1>;
    }
    return (
        <>
            <div className="flex items-center">
                <div className="m-4 p-4" >
                    <input type="text" placeholder="search" className="border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />
                    <button
                        className="bg-green-100 px-4 py-2 rounded-lg" onClick={() => {
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
                <div className="toprated-restaurant px-4 py-2 bg-gray-100 ">
                    <button className="toprated-btn" onClick={() => {
                        const filteredList = listOfrestaurant.filter((restaurant) => {
                            return restaurant.info.avgRating > 4;
                        });
                        setListOfRestaurant(filteredList);
                    }}>Toprated Restaurant</button>
                </div>
            </div>

            <div className="flex flex-wrap">
                {newListOfRestaurant.map((restaurant) => {
                    return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> < RestaurantCard key={restaurant.info.id} {...restaurant.info} /></Link>;
                })
                }

            </div>
        </ >
    );
};
export default Body;