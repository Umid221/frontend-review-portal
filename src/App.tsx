import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import theme from "./styles/theme";

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
