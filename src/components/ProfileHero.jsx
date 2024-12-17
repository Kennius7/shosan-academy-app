import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { CoverPics } from "../assets";
import ImageBackground from "./ImageBackground";



const ProfileHero = () => {
    const { profileName, DP1, lastVisitedTime } = useContext(MainContext);

    return (
        <section className="flexColStart w-full h-[400px] bg-white pt-[60px]">
            <ImageBackground 
                imgSrc={CoverPics} 
                isOverlay={true}
                overlayOpacity={0.9}
                className="flexCenter w-full h-[200px]" 
                childClass="top-[100px] left-2 w-[200px] h-[200px] rounded-full overflow-hidden 
                border-[5px] border-white"
            >
                <img src={DP1} alt="dp" className="w-full h-full object-cover" />
            </ImageBackground>
            <div className="w-full h-[40px] mt-[120px] flexColCenterStart pl-2">
                <p className="text-secondaryBlue text-[25px] font-semibold text-start leading-[28px]">
                    {profileName}
                </p>
                <p className="font-sans text-black text-[14px] leading-[28px]">
                    Last time here:&nbsp;
                    <span className="font-sans text-secondaryBlue text-[14px] leading-[28px]">
                        {lastVisitedTime}
                    </span>
                </p>
            </div>
        </section>
    )
}

export default ProfileHero
