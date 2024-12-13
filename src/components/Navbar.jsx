import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { navLinks } from "../utils/data";
import { NavLink, Link } from "react-router-dom";
import { capitalize } from "lodash";
import { Logo } from "../assets";
import Button from "./Button";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import { AiOutlineProfile } from "react-icons/ai";
// import { ImProfile } from "react-icons/im";



const Navbar = () => {
    const { active, setActive } = useContext(MainContext);
    let cartItemNumber = 3;
    const lightBlue = "#0E6DBA";
    const darkBlue = "#084170";

    return (
        <nav className="w-full bg-slate-400/60 fixed flexBetween">
            <Link to={"/"} className="flexStart">
                <img 
                    src={Logo}
                    alt="logo" 
                    className="md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] 
                        xs:w-[30px] xs:h-[30px] w-[24px] h-[24px] rounded-[50%]" 
                />
                <div className="font-semibold text-start text-slate-800 sm:text-[18px] xs:text-[16px] text-[13px] 
                    sm:pl-[10px] pl-[6px]">
                    Shosan Code Hub
                </div>
            </Link>

            <div className={`flexCenter`}>
                {
                    navLinks.map((nav, index) => (
                        <NavLink 
                            key={index}
                            to={nav.link} 
                            className={`
                                ${
                                    window.innerWidth >= 620 
                                        ? "px-3 h-[35px] m-2 flexEnd cursor-pointer hover:text-primaryBlue duration-300 transition-all hover:border-b-4 hover:border-primaryBlue focus:outline-none focus:ring-0"
                                        : "flexEnd w-full h-[30px] px-2 ss:text-[18px] text-[15px]"
                                } 
                                ${
                                    active === capitalize(nav.name) 
                                    ? "text-primaryBlue font-bold" 
                                    : "text-black font-normal title-text-shadow4"
                                }`
                            }
                            onClick={() => setActive(capitalize(nav.name))}
                        >
                            {capitalize(nav.name)}
                        </NavLink>
                    ))
                }
            </div>

            <div className="flexAround w-[180px] pr-2">
                {/*Cart block*/}
                <NavLink
                    to={"/cart"} 
                    className="relative flex justify-center items-center w-8 h-8 ring-2 ring-[#084170]/30 
                    rounded-full shadow-lg p-1"
                >
                    <IoCartOutline size={32} color={darkBlue} style={{ width: 100, height: 100 }}/>
                    <span className={`absolute z-2 left-5 bottom-5 w-5 h-5 p-1 bg-primaryBlue rounded-full 
                        text-white text-center flex justify-center items-center 
                        ${cartItemNumber >= 100 ? "text-[10px]" : "text-[12px]" }`}>
                        {cartItemNumber}
                    </span>
                </NavLink>
                {/*Profile Pics block*/}
                <NavLink
                    to={"/profile"} 
                    className="relative flex justify-center items-center w-8 h-8 ring-2 ring-[#084170]/30 
                    rounded-full shadow-lg"
                >
                    <CgProfile size={32} color={darkBlue} style={{ width: 100, height: 100 }}/>
                </NavLink>
                {/*Login Button block*/}
                <NavLink to={"/login"} >
                    <Button 
                        btnGradColor1={lightBlue}
                        btnGradColor2={darkBlue}
                        buttonText={"Login"} 
                        className={`xs:w-20 xs:h-8 w-16 h-8 rounded-[20px] xs:text-[14px] 
                        text-[12px] text-white shadow-[0px_0px_5px_0px_#0b1f139c]`} />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar

