import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { menu_api_url } from "../../utils/constants/constant";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(() => { fetchMenu(); }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.699466&lng=75.921185&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        setResInfo(jsonData);
    };
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, cloudinaryImageId, costForTwoMessage
    } = resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {
                    itemCards.map((item) => { return <li key={item.card.info.id}> {item.card.info.name} - INR{item.card.info.price / 100}</li>; })
                }
            </ul>
        </div>
    );
};
export default RestaurantMenu;

