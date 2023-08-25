import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
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

function App() {
    return (
        <>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </>
    );
}

export default App;
