import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log(resId);
    const resInfo = useRestaurantMenu(resId);
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

