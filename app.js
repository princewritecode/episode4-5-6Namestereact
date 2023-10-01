import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));


const element = React.createElement("h1", { className: "heading" }, "Inside heading");

const Element2 = function () {
    return (
        <>
            {element}
            <h1>This is created using function component which is just function which returns JSX </h1></>
    );
};


const Element3 = function () {
    return (
        <>
            <Element2 />
            <h3>This is heading inside the element 3 function component 🚀</h3>
        </>
    );
};



root.render(<Element3 />);