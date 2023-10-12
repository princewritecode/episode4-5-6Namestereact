import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Link } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(() => { import("./src/components/Grocery.jsx"); });
const AppLayOut = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        children:
            // we use :resid for dynamic and our routes will be unique for restaurant
            [
                { path: "/grocery", element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense> },
                { path: "restaurants/:resId", element: <RestaurantMenu /> },
                { path: "/", element: <Body /> },
                { path: "/about", element: <AboutUs /> },
                { path: "/contact", element: <Contact /> },
                { path: "/" }
            ],
        errorElement: <Error />
    }
]);
root.render(<RouterProvider router={appRouter} />);