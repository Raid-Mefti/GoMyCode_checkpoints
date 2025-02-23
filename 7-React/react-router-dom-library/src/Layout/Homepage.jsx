import { Outlet } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="flex justify-center align-center w-2/3 m-auto pt-10">
            <Outlet />
        </div>
    );
}
