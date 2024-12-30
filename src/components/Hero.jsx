import { useContext } from "react";
import { Overlay } from "@mantine/core";
import { BG1 } from "../assets";
import CountdownTimer from "./CountdownTimer";
import { MainContext } from "../context/mainContext";



const Hero = () => {
    const { examTimeLimit, days, hours, minutes, seconds } = useContext(MainContext);

    return (
        <section className="w-full relative">
            <div className="w-full sm:h-[600px] xs:h-[500px] h-[520px]">
                <img src={BG1} className="w-full h-full object-cover" />
                <Overlay color="black" opacity={.9} zIndex={1} />
            </div>
            <div className="w-full absolute z-[2] sm:top-32 top-20 flexColCenter">
                <div className="font-semibold text-center md:text-[39px] text-dimWhite
                    sm:text-[32px] xs:text-[24px] text-[20px] md:max-w-[800px] sm:max-w-[600px] 
                    xs:max-w-[420px] max-w-[320px] md:tracking-[3px] tracking-normal 
                    xs:leading-normal leading-[27px] sm:mb-6 mb-4">
                    Unlock Your Coding Potential with Our Online Programming Classes 
                </div>
                <div className="flex flex-wrap justify-center items-center font-semibold 
                    text-white sm:w-full w-[90%] sm:mb-8 mb-20">
                    <div className="text-center sm:text-[22px] text-[17px] 
                        mr-[10px] xs:tracking-normal tracking-tighter">
                        Seize this opportunity with a whooping
                    </div>
                    <div className="font-semibold text-secondaryYellow font-EncodeSans title-text-shadow1
                        sm:text-[28px] xs:text-[25px] text-[28px]">
                        40%
                    </div>
                    &nbsp;
                    <div className="text-center px-4 py-1 sm:text-[20px] text-[16px] bg-primaryBlue 
                        text-secondaryYellow rounded-[8px]">
                        Early Bird discount
                    </div> 
                    <div className="text-center sm:text-[22px] text-[17px] ml-[10px]">
                        on all courses!
                    </div>
                </div>

                <div className="flexCenter bg-primaryBlue rounded-[10px] border-[2px] 
                    border-secondaryYellow px-6 py-1">
                    <div className="font-EncodeSans font-semibold text-white sm:text-[22px] xs:text-[20px] text-[16px] 
                        tracking-wider">
                        Offer Lasts Till
                    </div>
                </div>

                <div className="w-full sm:mt-12 mt-4">
                    <CountdownTimer 
                        examTimeLimit={examTimeLimit} 
                        days={days} 
                        hours={hours} 
                        minutes={minutes} 
                        seconds={seconds} 
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero;
