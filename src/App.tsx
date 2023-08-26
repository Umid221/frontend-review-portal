import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "./App.css";
import Layout from "src/components/layout";
import Home from "src/pages/Home";
import Signup from "src/pages/Signup";
import Login from "src/pages/Login";
import theme from "src/styles/theme";

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
            <ChakraProvider theme={theme}>
                <ColorModeProvider>
                    <RouterProvider router={router} />
                </ColorModeProvider>
            </ChakraProvider>
        </>
    );
}

export default App;
