import { useContext } from "react";
import { MainContext } from "../context/mainContext";
// import { BiPen } from "react-icons/bi";
import { PiPencil } from "react-icons/pi";



const ProfileSection = () => {
    const { profileName, email, darkBlue } = useContext(MainContext);


    return (
        <section className="w-full">
            <div className="w-full h-[440px] mt-10 flexCenter">
                <div className="w-[60%] h-[350px] rounded-2xl bg-slate-200 flexColStartCenter">
                    <div className="text-secondaryBlue text-[25px] mt-4">
                        Profile Section
                    </div>
                    <ul className="grid grid-cols-2 gap-4 mx-auto mt-10 w-full px-4">
                        <li className="flexColCenterStart">
                            <div className="text-black text-[18px]">
                                Full Name
                            </div>
                            <div className="flexBetween w-full">
                                <div className="text-secondaryBlue text-[16px] font-sans italic">
                                    { profileName }
                                </div>
                                <PiPencil 
                                    onClick={() => console.log("Checking...")} 
                                    size={20} 
                                    color={darkBlue} 
                                    style={{ width: 20, height: 20, opacity: 0.5}} 
                                />
                            </div>
                            <hr className="border-[1px] border-black/30 w-full" />
                        </li>
                        <li className="flexColCenterStart">
                            <div className="text-black text-[18px]">
                                Email Address
                            </div>
                            <div className="flexBetween w-full">
                                <div className="text-secondaryBlue text-[16px] font-sans italic">
                                    { email }
                                </div>
                                <PiPencil 
                                    onClick={() => console.log("Checking...")} 
                                    size={20} 
                                    color={darkBlue} 
                                    style={{ width: 20, height: 20, opacity: 0.5}} 
                                />
                            </div>
                            <hr className="border-[1px] border-black/30 w-full" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection


