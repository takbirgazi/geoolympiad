import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
    return (
        <div className="border-b bg-gray-100">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div>
                    <NavLink to="/"><img src={logo} className="h-12"  /></NavLink>
                </div>
                <div className="flex gap-5 py-5 font-bold opacity-70">
                    <div className="md:hidden flex gap-5 font-bold opacity-70 border py-2 px-4 text-white bg-black rounded text-2xl cursor-pointer">
                        <FaBars />
                    </div>
                    <div className="md:flex gap-5 font-bold opacity-70 hidden">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/bgoevents">BGO Events</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;