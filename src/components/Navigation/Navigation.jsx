import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

function Navigation() {
    const [active, setActive] = useState(true);
    const [sticky, setSticky] = useState(false);
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
            setSticky(true);
        }else{
            setSticky(false);
        }
    });
    const navLinks = 
            <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/bgoevents">BGO Events</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button className="px-5 py-2 bg-black text-white">Registration</button>
            </>;
    const resNavHandeler = ()=>{
        setActive(!active);
    }
    return (
        <div className={`border-b bg-gray-100 ${sticky ? 'fixed w-full top-0' : ''}`}>
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div>
                    <NavLink to="/"><img src={logo} className="h-12"  /></NavLink>
                </div>
                <div className="flex gap-5 py-5 font-bold relative">
                    <div className="md:flex items-center gap-5 font-bold opacity-70 hidden">  {navLinks} </div>
                    <div className="md:hidden">
                        <div onClick={resNavHandeler} className="flex gap-5 font-bold opacity-70 border py-2 px-4 text-white bg-black rounded text-2xl cursor-pointer">
                            <FaBars />
                        </div>
                        <div className={`${active && "hidden"} duration-100 absolute bg-white border rounded px-5 py-3 opacity-100 top-16 right-1 flex flex-col gap-3`}> {navLinks} </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Navigation;