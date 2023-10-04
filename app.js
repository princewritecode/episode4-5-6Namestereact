import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

            [
                { path: "/", element: <Body /> },
                { path: "/about", element: <AboutUs /> },

                { path: "/contact", element: <Contact /> }
            ],

        errorElement: <Error />
    }
]);

root.render(<RouterProvider router={appRouter} />);