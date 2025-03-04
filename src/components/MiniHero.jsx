/* eslint-disable react/prop-types */
import { Overlay } from "@mantine/core";
import { BG1 } from "../assets";



const MiniHero = ({ mainText="Shosan Code Hub", subText="An online tech academy platform" }) => {

    return (
        <section className="flexColStart w-full">
            <div className="relative w-full">
                <div className="w-full sm:h-[300px] xs:h-[220px] h-[250px]">
                    <img src={BG1} className="w-full h-full object-cover" />
                    <Overlay color="black" opacity={.9} zIndex={1} />
                </div>
                <div className="absolute z-[2] sm:top-[150px] xs:top-[120px] top-[120px] left-0 right-0 flexColCenter">
                    <div className="font-semibold text-lightBlue sm:text-[30px] text-[25px] 
                        text-center title-text-shadow1">
                        { mainText }
                    </div>
                    <div className="font-medium text-white text-center sm:text-[20px] text-[16px]">
                        { subText }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniHero

