
import { Overlay } from "@mantine/core";
import { BG1 } from "../assets";


const Hero = () => {

    return (
        <section className="w-full relative sm:h-[600px] xs:h-[500px] h-[400px]">
            <div className="w-full h-full">
                <img src={BG1} className="w-full h-full object-cover" />
                <Overlay color="black" opacity={.7} zIndex={1} />
            </div>
            <div className="absolute top-32 z-[2] w-full flex flex-col justify-center items-center 
                md:mb-[4%] sm:mb-[3%] xs:mb-[4%] mb-[3%]">
                <div className="font-semibold text-center md:text-[39px] text-dimWhite
                    sm:text-[32px] xs:text-[24px] text-[20px] md:max-w-[800px] sm:max-w-[600px] 
                    xs:max-w-[420px] max-w-[320px] md:tracking-[3px] tracking-normal md:mb-[1%] 
                    sm:mb-[1%] xs:mb-[3%] mb-[2%] xs:leading-normal leading-[27px]">
                    Unlock Your Coding Potential with Our Online Programming Classes 
                </div>
                <div className="flex flex-wrap justify-center items-center font-semibold 
                    text-white md:mb-[2%] sm:mb-[8%] xs:mb-[14%] mb-[7%] xs:w-full w-[90%]">

                    <div className="text-center sm:text-[20px] xs:text-[16px] text-[16px] 
                        mr-[10px] xs:tracking-normal tracking-tighter">
                        Seize this opportunity with a whooping
                    </div>
                    <div className="font-semibold text-primaryBlue font-poppins title-text-shadow1
                        sm:text-[28px] xs:text-[20px] text-[23px] navText1">
                        40%
                    </div>
                    &nbsp;
                    <div className="text-center px-4 py-1 sm:text-[20px] xs:text-[16px] text-[16px] bg-blue-600 
                        text-yellow-400 rounded-[8px]">
                        Early Bird discount
                    </div> 
                    <div className="text-center sm:text-[20px] xs:text-[16px] text-[17px] ml-[10px]">
                        on all courses!
                    </div>
                </div>

                <div className="flex justify-center items-center bg-primaryBlue rounded-[10px] 
                    border-[2px] border-secondaryYellow px-6 py-1">
                    <div className="font-sans font-bold text-white sm:text-[22px] xs:text-[20px] text-[16px] tracking-wider">
                        Offer Lasts Till
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;
