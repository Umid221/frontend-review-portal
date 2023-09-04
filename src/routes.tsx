import Layout from "src/components/layout";
import Home from "src/pages/Home";
import Signup from "src/pages/Signup";
import Login from "src/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Reviews from "./pages/Reviews";
// import React from "react";
// const Login = React.lazy(() => import("./pages/Login"));

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
        ],
    },
    {
        path: "/register",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
