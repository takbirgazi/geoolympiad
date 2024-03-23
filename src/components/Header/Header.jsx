import Navigation from "../Navigation/Navigation";
import { MdCall, MdOutlineMail } from "react-icons/md";

const Header = () => {
    return (
        <div>
            <div className="flex lg:gap-5 gap-1 lg:flex-row flex-col items-center justify-center py-2 bg-black text-white">
                <div className="flex gap-2 items-center text-2xl justify-center"><MdCall className="text-red-500"/><p className="font-semibold">+8801913171704</p></div>
                <div className="flex gap-2 items-center text-2xl justify-center"><MdOutlineMail className="text-red-500"/><p className="font-semibold">info@geoolympiadbd.com</p></div>
            </div>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;