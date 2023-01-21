import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Films } from "../pages/Films";
import { Detail } from "../pages/Detail";
import { NotFound } from "../pages/NotFound";

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
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


