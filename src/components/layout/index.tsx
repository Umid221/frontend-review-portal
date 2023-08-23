import { Outlet } from "react-router-dom";
import Header from "./Header";

function index() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default index;
