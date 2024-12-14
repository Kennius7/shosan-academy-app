/* eslint-disable react/prop-types */
import { TimerBox } from "./TimerBox";



const CountdownTimer = ({ examTimeLimit, days, hours, minutes, seconds }) => {
    return (
        <section>
            <div className="flex justify-center items-center w-[100%]">
                <div className="flex justify-around items-center xs:w-[70%] w-[90%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center bg-secondaryBlue/90 box-shadow 
                            border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                            sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                            <TimerBox timeLimit={examTimeLimit} timeSegment={days}/>
                        </div>
                        <span className="flexCenter font-bold text-white 
                            sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                            DAY<span className={`${days === 0 || days === 1 ? "hidden" : "block"}`}>S</span>
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flexCenter bg-secondaryBlue/90 box-shadow 
                            border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                            sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                            <TimerBox timeLimit={examTimeLimit} timeSegment={hours}/>
                        </div>
                        <span className="flexCenter font-bold text-white 
                            sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                            HOUR<span className={`${hours === 0 || hours === 1 ? "hidden" : "block"}`}>S</span>
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flexCenter bg-secondaryBlue/90 box-shadow 
                            border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                            sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                            <TimerBox timeLimit={examTimeLimit} timeSegment={minutes}/>
                        </div>
                        <span className="flexCenter font-bold text-white 
                            sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                            MINUTE<span className={`${minutes === 0 || minutes === 1 ? "hidden" : "block"}`}>S</span>
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flexCenter bg-secondaryBlue/90 box-shadow 
                            border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                            sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                            <TimerBox timeLimit={examTimeLimit} timeSegment={seconds}/>
                        </div>
                        <span className="flexCenter font-bold text-white 
                            sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                            SECOND<span className={`${seconds === 0 || seconds === 1 ? "hidden" : "block"}`}>S</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountdownTimer


