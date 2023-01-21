import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Films } from "../pages/Films";
import { Detail } from "../pages/Detail";
import { NotFound } from "../pages/NotFound";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Films />,
                errorElement: <NotFound />
            },
            {
                path: "/film/:imdbID",
                element: <Detail />,
                errorElement: <NotFound />
            }
        ]
    }
]);


export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
            <Footer />
        </React.Fragment>
    );
};


