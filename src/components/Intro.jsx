import { introBG1 } from "../assets";



function Intro () {
    return (
        <>
            <div className="flexAround w-full sm:h-[600px] xs:h-[500px] h-[560px]">
                <div className="w-full h-full flexAround">
                    <div className="relative flex sm:flex-row flex-col sm:justify-around justify-center 
                        items-start">
                        <div className="flexCenter box-shadow rounded-[10px] overflow-hidden sm:w-[450px] 
                            sm:h-[400px] xs:w-[400px] xs:h-[250px] w-[90%] h-[220px]">
                            <img 
                                src={introBG1} 
                                alt="intro pics" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="flexCenter sm:w-[40%] xs:w-[75%] w-[88%]">
                            <div className="font-semibold sm:text-start text-center sm:text-[25px] xs:text-[16px] 
                                text-[15px] sm:mt-0 xs:mt-[20px] mt-[40px]">
                                Are you ready to embark on a journey of digital mastery? 
                                Dive into the world of coding with our cutting-edge online programming classes!
                                <br/> <br className="sm:block xs:hidden block" />
                                Whether you&apos;re a beginner looking to build a solid foundation or an 
                                experienced developer aiming to level up your skills, we&apos;ve got the 
                                perfect courses for you.
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Intro
