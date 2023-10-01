import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import Body from "./src/components/Body";
import Header from "./src/components/Header";

const AppLayOut = () => {
    return (
        <>
            <Header />
            <Body />

        </>
    );
};
root.render(<AppLayOut />);