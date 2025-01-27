import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { BG1 } from "../assets";
import ImageBackground from "./ImageBackground";



const ProfileHero = () => {
    const { profileFormData, DP1, userIcon, lastVisitedTime } = useContext(MainContext);

    return (
        <section className="flexColStart w-full bg-white pt-[60px]">
            <ImageBackground 
                BGHeight={ 
                    window.innerWidth > 768 ? "300px" 
                    : window.innerWidth < 768 
                    && window.innerWidth > 500 ? "220px" : "140px" 
                }
                imgSrc={BG1} 
                isOverlay={true}
                overlayOpacity={0.9}
                className="flexCenter w-full" 
                childClass={`sm:top-[200px] top-[80px] left-2 sm:w-[200px] sm:h-[200px] w-[120px] h-[120px] 
                rounded-full overflow-hidden border-[5px] border-white 
                ${profileFormData?.email === "ogbogukenny@yahoo.com" ? "" : "bg-secondaryBlue"}`}
            >
                <img 
                    src={ profileFormData?.email === "ogbogukenny@yahoo.com" ? DP1 : userIcon} 
                    alt="dp" 
                    className={`w-full h-full object-cover`} 
                />
            </ImageBackground>
            <div className="w-full h-[40px] sm:mt-[120px] mt-[65px] flexColCenterStart pl-2">
                <p className="text-secondaryBlue sm:text-[25px] text-[18px] font-semibold text-start leading-[28px]">
                    {profileFormData.name}
                </p>
                <p className="font-sans text-black sm:text-[14px] text-[12px] sm:leading-[28px] leading-[14px]">
                    Last time here:&nbsp;
                    <span className="font-sans text-secondaryBlue sm:text-[14px] text-[12px] 
                        sm:leading-[28px] leading-[14px]">
                        {lastVisitedTime}
                    </span>
                </p>
            </div>
        </section>
    )
}

export default ProfileHero
