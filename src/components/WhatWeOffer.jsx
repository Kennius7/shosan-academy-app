


const WhatWeOffer = () => {
    return (
        <section 
            style={{ background: `linear-gradient(180deg, #e2e8f0, white, #e2e8f0)` }} 
            className="w-full flexColCenter sm:pt-12 pt-6 px-3 pb-20"
        >
            <div className="w-full flexCenter sm:mt-10 mt-4 mb-4">
                <h2 className="text-secondaryBlue font-semibold text-[25px] text-center">
                    What We Offer
                </h2>
            </div>
            <p className="w-full text-center text-secondaryBlue text-[18px] font-medium px-3 mb-6">
                &nbsp;&nbsp;At Shosan Code Hub Online Academy, we strive to provide an 
                unparalleled learning experience:
            </p>
            <ul className="grid sm:grid-cols-2 grid-cols-1 gap-[10px] sm:p-10 p-0 bg-slate-200/50 rounded-3xl">
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Comprehensive Course Library:
                    </div>
                    <p className="pl-7 italic">
                        Choose from a wide range of subjects, from technology to arts.
                    </p>
                </li>
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Interactive Learning Tools:
                    </div>
                    <p className="pl-7 italic">
                        Engage with quizzes, live projects, and hands-on exercises.
                    </p>
                </li>
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Personalized Learning Paths:
                    </div>
                    <p className="pl-7 italic">
                        Get tailored recommendations to achieve your goals faster.
                    </p>
                </li>
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Certification Programs:
                    </div>
                    <p className="pl-7 italic">
                        Earn credentials that enhance your resume and professional profile.
                    </p>
                </li>
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Ongoing Updates:
                    </div>
                    <p className="pl-7 italic">
                        Stay ahead with courses updated to reflect the latest industry trends.
                    </p>
                </li>
                <li className="text-[17px] mb-2 sm:px-10 px-1">
                    <div className="font-semibold text-secondaryBlue">
                        ✅ Personalized Class Sessions:
                    </div>
                    <p className="pl-7 italic">
                        Get free and personal class sessions and one on one mentoring in the programming world.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WhatWeOffer



