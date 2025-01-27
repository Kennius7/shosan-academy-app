import { Link } from "react-router-dom";
import { Logo } from "../assets";



const Footer = () => {
    return (
        <footer className="w-full flexColCenter border-t-[3px] border-black bg-secondaryBlue sm:py-6 py-4">
            <div className="w-full sm:px-6 px-4 flex sm:flex-row flex-col sm:justify-between justify-center items-center">
                <div className="w-full sm:hidden flexColCenter mb-6">
                    <Link 
                        to={"/"} 
                        className="h-full sm:pb-0 pb-[10px] flex flex-row justify-start sm:items-center items-end">
                        <img 
                            src={Logo}
                            alt="logo" 
                            className="w-[40px] h-[40px] rounded-full shadow-[0px_0px_5px_0px_#faf5aac2]" 
                        />
                        <div className="font-semibold text-start text-slate-100 text-[22px] sm:pl-[10px] ml-2">
                            Shosan Code Hub
                        </div>
                    </Link>
                    <hr className="w-[85%] bg-white h-[1px] my-[2px]"/>
                    <hr className="w-[80%] bg-white h-[1px] my-[2px]"/>
                    <hr className="w-[75%] bg-white h-[1px] my-[2px]"/>
                </div>
                <div className="w-full flexBetween mb-6">
                    <div className="flexColStartStart">
                        <p className="text-black font-medium sm:text-[18px] text-[15px]">Follow us on:</p>
                        <div className="flexColStartStart">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lightBlue">
                                Facebook
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lightBlue">
                                Twitter
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lightBlue">
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <Link to={"/"} className="h-full sm:pb-0 pb-[10px] flex flex-row justify-start sm:items-center items-end">
                            <img 
                                src={Logo}
                                alt="logo" 
                                className="w-[35px] h-[35px] rounded-full shadow-[0px_0px_5px_0px_#faf5aac2]" 
                            />
                            <div className="font-semibold text-start text-slate-100 text-[25px] sm:pl-[10px] ml-2">
                                Shosan Code Hub
                            </div>
                        </Link>
                    </div>
                    <div className="sm:flexColCenterStart flexColCenterEnd">
                        <div className="flex flex-col sm:item-start item-end">
                            <p className="text-end text-black font-medium sm:text-[18px] text-[15px]">
                                Contact us at:
                            </p>
                            <a 
                                href="mailto:shosanacodemy@gmail.com" 
                                className={`text-lightBlue sm:tracking-normal -tracking-[1px]`}>
                                shosanacodemia@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col sm:item-start item-end">
                            <p className="text-end text-black font-medium sm:text-[18px] text-[15px]">
                                Phone:
                            </p>
                            <a 
                                href="mailto:shosanacodemy@gmail.com" 
                                className={`text-lightBlue sm:tracking-normal -tracking-[1px]`}>
                                +234-8055549979
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-[15px] italic text-white">
                &copy; {new Date().getFullYear()} Shosan Code Hub Online Academy.
                <br className="sm:hidden block"/> All rights reserved.
            </p>
        </footer>
    )
}

export default Footer



