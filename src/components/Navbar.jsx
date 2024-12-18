import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { navLinks } from "../utils/data";
import { NavLink, Link, useLocation } from "react-router-dom";
// import { capitalize } from "lodash";
// import _ from "lodash";
import { Logo } from "../assets";
import Button from "./Button";
import { CgProfile } from "react-icons/cg";
// import { BiCaretDown } from "react-icons/bi";
// import { BsCart } from "react-icons/bs";

import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";



const Navbar = () => {
    const { 
        lightBlue, darkBlue, yellow, isLoggedIn, setIsLoggedIn, 
        profileFormData, DP1, isMenuOpen, setIsMenuOpen 
    } = useContext(MainContext);
    const location = useLocation();
    const sentenceCase = (string) => {
        if (!string) return "";
        return string.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="w-full h-[60px] bg-secondaryBlue/80 fixed z-10 flexBetween backdrop-blur-md px-2">
            <Link to={"/"} className="flexStart">
                <img 
                    src={Logo}
                    alt="logo" 
                    className="md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[30px] h-[30px] 
                    rounded-full shadow-[0px_0px_5px_0px_#faf5aac2]" 
                />
                <div className="font-semibold text-start text-slate-100 md:text-[18px] ss:text-[14px] text-[17px] 
                    sm:pl-[10px] ml-2 ss:tracking-[0] -tracking-[2px]">
                    Shosan Code Hub
                </div>
            </Link>

            <div className={`xs:flex hidden justify-center items-center`}>
                {
                    navLinks.map((nav, index) => (
                        <NavLink 
                            key={index}
                            to={nav.link} 
                            className={`flexEnd mx-2 sm:h-[35px] h-[30px] cursor-pointer 
                                hover:text-secondaryYellow duration-300 transition-all 
                                hover:border-b-4 hover:border-secondaryYellow md:px-2 px-0
                                focus:outline-none focus:ring-0 md:text-[18px] ss:text-[14px] text-[12px]
                                ${
                                    isActive(nav.link) === "active"
                                    ? "text-secondaryYellow font-bold" 
                                    : "text-white font-normal title-text-shadow4"
                                }`
                            }
                        >
                            {sentenceCase(nav.name)}
                        </NavLink>
                    ))
                }
            </div>

            <div className={`flexAround ${isLoggedIn ? "pr-1" : "pr-0"}`}>
                <button 
                    onClick={() => setIsLoggedIn(!isLoggedIn)} 
                    className="flexCenter md:w-8 md:h-8 ss:w-6 ss:h-6 w-4 h-4 ss:ring-2 ring-1 ring-white/70 
                    rounded-full shadow-lg p-1 cursor-pointer mx-2">
                    {
                        isLoggedIn 
                        ?
                        <div className="text-white text-center flexCenter text-[8px] w-6 h-6 ring-2 ring-white/50">
                            Open
                        </div>
                        :
                        <div className="text-white text-center flexCenter text-[8px] w-6 h-6 ring-2 ring-white/50">
                            Close
                        </div>
                    }
                </button>
                {
                    isLoggedIn 
                    ? 
                    <div className="font-normal font-sans md:text-[15px] ss:text-[13px] text-[11px] 
                        text-white italic ss:px-2 px-1">
                        Hi, {profileFormData.name.split(" ")[0]}
                    </div>
                    : null
                }
                {/*Mobile Screen Login Button block*/}
                {
                    isLoggedIn 
                    ? null 
                    : 
                    <NavLink to={"/login"} className={"xs:hidden flexCenter"} >
                        <Button 
                            btnGradColor1={lightBlue}
                            btnGradColor2={darkBlue}
                            buttonText={"Login"} 
                            className={`w-[70px] h-[30px] rounded-[16px] text-[12px] 
                            shadow-[0px_0px_5px_0px_#0b1f139c] font-medium
                            ${isActive("/login") === "active" ? "text-secondaryYellow" : "text-white"}`} 
                        />
                    </NavLink>
                }
                {/*Profile Pics block*/}
                <NavLink
                    to={"/profile"} 
                    className="flex justify-center items-center sm:w-8 sm:h-8 w-6 h-6 ring-2 ring-white/50 
                    rounded-full shadow-lg overflow-hidden ss:mx-0 mx-2"
                >
                    {
                        isLoggedIn 
                        ?
                            <img src={DP1} alt="profile pics" className="w-full h-full object-cover" /> 
                        :
                        <CgProfile size={32} color={yellow} style={{ width: 100, height: 100 }}/>
                    }
                </NavLink>
                {/*Caret block*/}
                {/* {
                    isLoggedIn 
                    ?
                        <NavLink to={"/profile"} className={`w-6 h-6 pl-1`}>
                            <BiCaretDown size={20} color={"#fff"} style={{ width: 30, height: 30, opacity: 0.5}} /> 
                        </NavLink>
                    : null
                } */}
                {/*Large Screen Login Button block*/}
                {
                    isLoggedIn 
                    ? null 
                    : 
                    <NavLink to={"/login"} className={"xs:flex hidden px-2"} >
                        <Button 
                            btnGradColor1={lightBlue}
                            btnGradColor2={darkBlue}
                            buttonText={"Login"} 
                            className={`xs:w-20 xs:h-8 w-16 h-8 rounded-[20px] xs:text-[14px] text-[12px] 
                            shadow-[0px_0px_5px_0px_#0b1f139c] font-medium
                            ${isActive("/login") === "active" ? "text-secondaryYellow" : "text-white"}`} 
                        />
                    </NavLink>
                }
                {/*Mobile Menu block*/}
                <div className="">
                    <div 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="ss:hidden flex justify-center items-center w-6 h-6 ring-2 ring-white/50 
                        rounded-full shadow-lg overflow-hidden">
                        { 
                            isMenuOpen 
                            ?
                            <MdMenuOpen size={32} color={yellow} style={{ width: 50, height: 50 }} />
                            :
                            <MdOutlineMenu size={32} color={"#fff"} style={{ width: 50, height: 50 }} />
                        }
                    </div>
                    <div className={`top-[58px] w-[170px] xs:hidden flexColCenterEnd 
                        bg-secondaryBlue/80 transition-all duration-500 backdrop-blur-md pr-2
                        rounded-bl-[20px] fixed z-10 py-2 ${isMenuOpen ? "right-0" : "-right-60" }`}>
                        {
                            navLinks.map((nav, index) => (
                                <NavLink 
                                    key={index}
                                    to={nav.link} 
                                    className={`flexBetween w-full px-2
                                        ${
                                            isActive(nav.link) === "active"
                                            ? "text-secondaryYellow font-bold" 
                                            : "text-white font-normal title-text-shadow1"
                                        }`
                                    }
                                >
                                    <div className="flexCenter">
                                        <BiChevronLeft 
                                            size={20} 
                                            color={"#fff"} 
                                            style={{ width: 25, height: 25, opacity: 0.7 }}
                                            className={`w-6 h-6 rounded-full 
                                                ${ isActive(nav.link) === "active"
                                                    ? "animate-pulseBorder" 
                                                    : "animate-none"
                                                }`}
                                        />
                                    </div>
                                    <div className="text-[14px] my-[5px] focus:text-secondaryYellow 
                                        focus:outline-none focus:ring-0 cursor-pointer">
                                        {sentenceCase(nav.name)}
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default Navbar

