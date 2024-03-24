import { NavLink } from "react-router-dom";

function Error(){
    return (
        <div className="flex items-center justify-center min-h-screen flex-col gap-5">
            <h2 className="text-black font-bold text-2xl">404 | Page Not Found</h2>
            <NavLink className="border px-4 py-2 rounded" to="/">Go Back</NavLink>
        </div>
    );
}

export default Error;