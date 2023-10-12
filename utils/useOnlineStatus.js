import { useEffect, useState } from "react";

//** to write any custom hooks first understand the constract like what's the input of the hook and what's the output of the hook */
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStatus(false);
        });
    }, []);
    //boolean value
    return onlineStatus;
};
export default useOnlineStatus;