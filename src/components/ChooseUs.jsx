import { shosanIntro } from "../assets";



const ChooseUs = () => {
    return (
        <section 
            style={{ background: `linear-gradient(180deg, white, #e2e8f0)` }} 
            className="w-full flexColCenter mt-8 py-4 px-3"
        >
            <div className="w-full flexCenter sm:mb-4 mb-6">
                <h2 className="text-secondaryBlue font-semibold text-[25px] text-center">
                    Why Choose Us?
                </h2>
            </div>
            <div className="w-full flex flex-row justify-around items-center">
                <div className="sm:block hidden">
                    <video 
                        src={shosanIntro} 
                        width={"550px"} 
                        height={"220px"} 
                        loop autoPlay muted 
                        className="rounded-xl" />
                </div>
                <ul className="flex flex-col justify-center sm:items-start items-center sm:w-[50%] w-full gap-3">
                    <li className="text-[17px]">
                        <strong className="text-secondaryBlue">
                            ✅ Expert Instructors:
                        </strong> 
                        <p className="pl-7 italic">
                            Learn from industry-leading professionals with years of real-world experience.
                        </p>
                    </li>
                    <li className="text-[17px]">
                        <strong className="text-secondaryBlue">
                            ✅ Flexible Learning:
                        </strong> 
                        <p className="pl-7 italic">
                            Access our courses anytime, anywhere, and learn at your own pace.
                        </p>
                    </li>
                    <li className="text-[17px]">
                        <strong className="text-secondaryBlue">
                            ✅ Affordable Pricing:
                        </strong>
                        <p className="pl-7 italic">
                            Get top-notch education without breaking the bank.
                        </p>
                    </li>
                    <li className="text-[17px]">
                        <strong className="text-secondaryBlue">
                            ✅ Community Support:
                        </strong>
                        <p className="pl-7 italic">
                            Join a community of learners and collaborate with peers worldwide.
                        </p>
                    </li>
                    <li className="text-[17px]">
                        <strong className="text-secondaryBlue">
                            ✅ Career Growth:
                        </strong>
                        <p className="pl-7 italic">
                            Unlock new career opportunities with certifications and practical skills.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ChooseUs


