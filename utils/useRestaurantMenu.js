import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(() => { fetchMenu(); }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.699466&lng=75.921185&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        setResInfo(jsonData);
    };

    return resInfo;
};

export default useRestaurantMenu;