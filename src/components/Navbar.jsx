import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { navLinks } from "../utils/data";
import { NavLink, Link, useLocation } from "react-router-dom";
// import { capitalize } from "lodash";
// import _ from "lodash";
import { Logo } from "../assets";
import Button from "./Button";
import { CgProfile } from "react-icons/cg";
import { BiCaretDown } from "react-icons/bi";
// import { BsCart } from "react-icons/bs";



const Navbar = () => {
    const { lightBlue, darkBlue, yellow, isLoggedIn, profileName, DP1 } = useContext(MainContext);
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
                    className="md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] shadow-[0px_0px_5px_0px_#faf5aac2]
                        xs:w-[30px] xs:h-[30px] w-[24px] h-[24px] rounded-[50%]" 
                />
                <div className="font-semibold text-start text-slate-100 sm:text-[18px] xs:text-[16px] text-[13px] 
                    sm:pl-[10px] ml-2">
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
                                        ? "px-3 h-[35px] m-2 flexEnd cursor-pointer hover:text-secondaryYellow duration-300 transition-all hover:border-b-4 hover:border-secondaryYellow focus:outline-none focus:ring-0"
                                        : "flexEnd w-full h-[30px] px-2 ss:text-[18px] text-[15px]"
                                } 
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
                {/*Cart block*/}
                {/* <NavLink
                    to={"/cart"} 
                    className="relative flex justify-center items-center w-8 h-8 ring-2 ring-white/50 
                    rounded-full shadow-lg p-1"
                >
                    <BsCart size={32} color={yellow} style={{ width: 100, height: 100 }}/>
                    <span className={`absolute z-2 left-5 bottom-5 w-5 h-5 bg-secondaryYellow rounded-full 
                        text-secondaryBlue text-center flexCenter 
                        ${cartItemNumber >= 100 ? "text-[10px]" : "text-[12px]" }`}>
                        {cartItemNumber}
                    </span>
                </NavLink> */}
                {
                    isLoggedIn 
                    ? 
                    <div className="font-normal font-sans text-[15px] text-white italic px-2">
                        Welcome, {profileName}
                    </div>
                    : null
                }
                {/*Profile Pics block*/}
                <NavLink
                    to={"/profile"} 
                    className="relative flex justify-center items-center w-8 h-8 ring-2 ring-white/50 
                    rounded-full shadow-lg overflow-hidden"
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
                {
                    isLoggedIn 
                    ?
                        <NavLink to={"/profile"} className={`w-6 h-6 pl-1`}>
                            <BiCaretDown size={20} color={"#fff"} style={{ width: 30, height: 30, opacity: 0.5}} /> 
                        </NavLink>
                    : null
                }
                {/*Login Button block*/}
                {
                    isLoggedIn 
                    ? null 
                    : 
                    <NavLink to={"/login"} className={"px-2"} >
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
            </div>
        </nav>
    )
} 

export default Navbar

