import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

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
                path: "signup",
                element: <Signup />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
