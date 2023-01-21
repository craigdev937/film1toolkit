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
        element: <Films />,
        errorElement: <NotFound />
    },
    {
        path: "/films/:imdbID",
        element: <Detail />,
        errorElement: <NotFound />
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <Header />
            <RouterProvider router={ReactRouter} />
            <Footer />
        </React.Fragment>
    );
};


