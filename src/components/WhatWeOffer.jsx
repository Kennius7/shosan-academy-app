


const WhatWeOffer = () => {
    return (
        <section 
            style={{ background: `linear-gradient(180deg, #e2e8f0, white, #e2e8f0)` }} 
            className="w-full flexColCenter py-4 px-3"
        >
            <div className="w-full flexCenter mt-10 mb-4">
                <h2 className="text-secondaryBlue font-semibold text-[25px] text-center">
                    What We Offer
                </h2>
            </div>
            <p className="w-full text-center text-secondaryBlue text-[18px] font-medium px-3 mb-6">
                &nbsp;&nbsp;At Shosan Code Hub Online Academy, we strive to provide an 
                unparalleled learning experience:
            </p>
            <ul className="flexColCenter w-full gap-3">
                <li className="text-[17px]">
                    <strong className="text-secondaryBlue">
                        ✅ Comprehensive Course Library:
                    </strong>
                    <p className="pl-7 italic">
                        Choose from a wide range of subjects, from technology to arts.
                    </p>
                </li>
                <li className="text-[17px]">
                    <strong className="text-secondaryBlue">
                        ✅ Interactive Learning Tools:
                    </strong>
                    <p className="pl-7 italic">
                        Engage with quizzes, live projects, and hands-on exercises.
                    </p>
                </li>
                <li className="text-[17px]">
                    <strong className="text-secondaryBlue">
                        ✅ Personalized Learning Paths:
                    </strong>
                    <p className="pl-7 italic">
                        Get tailored recommendations to achieve your goals faster.
                    </p>
                </li>
                <li className="text-[17px]">
                    <strong className="text-secondaryBlue">
                        ✅ Certification Programs:
                    </strong>
                    <p className="pl-7 italic">
                        Earn credentials that enhance your resume and professional profile.
                    </p>
                </li>
                <li className="text-[17px]">
                    <strong className="text-secondaryBlue">
                        ✅ Ongoing Updates:
                    </strong>
                    <p className="pl-7 italic">
                        Stay ahead with courses updated to reflect the latest industry trends.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WhatWeOffer



