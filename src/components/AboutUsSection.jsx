
import { Logo } from "../assets";



const AboutUsSection = () => {

    return (
        <section className="w-full grid sm:grid-cols-3 grid-cols-1 gap-4 sm:items-start items-center sm:mb-8 mb-0">
            {/* About Us Section */}
            <div className="w-full flexColCenter mt-10">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            About Us
                        </div>
                    </div>
                    <div className="flexColCenter w-full mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <div className="w-[96%] flexCenter mt-4 border border-secondaryBlue rounded-xl p-4 bg-slate-100">
                    <div className="text-[15px] font-EncodeSans">
                        &nbsp;&nbsp;&nbsp;&nbsp;Welcome to Shosan Code Hub, where coding meets creativity and 
                        innovation! <br/>At Shosan Code Hub, we are passionate about empowering 
                        individuals with the skills they need to succeed in the ever-evolving 
                        world of technology. <br/>Founded by a team of experienced programmers and 
                        educators, our mission is to make high-quality programming education 
                        accessible, affordable, and engaging for learners of all levels. <br/>Whether 
                        you&apos;re a beginner taking your first steps in coding or an experienced 
                        developer looking to refine your skills, we&apos;ve got you covered. <br/>Our 
                        carefully designed online classes cover a wide range of programming 
                        languages and technologies, including Python, Java, JavaScript, HTML/CSS, 
                        machine learning, data science, and much more.
                    </div>
                </div>
            </div>
            {/* What Set Us Apart Section */}
            <div className="w-full flexColCenter mt-10">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            What Sets Us Apart
                        </div>
                    </div>
                    <div className="flexColCenter w-full mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <ul className="w-[96%] flexColCenter mt-4 border border-secondaryBlue rounded-xl 
                    gap-4 p-4 bg-slate-100">
                        <li className="text-[15px] font-EncodeSans">
                            <span className="text-primaryBlue font-semibold">1.
                            </span>&nbsp;<span className="font-semibold">Expert Instructors</span>: Learn from 
                            industry professionals with years of experience in software development and teaching.
                        </li>
                        <li className="text-[15px] font-EncodeSans">
                            <span className="text-primaryBlue font-semibold">2.
                                </span>&nbsp;<span className="font-semibold">Hands-On Learning</span>: Our courses 
                            emphasize practical, real-world projects to ensure you build skills that 
                            are immediately applicable.
                        </li>
                        <li className="text-[15px] font-EncodeSans">
                            <span className="text-primaryBlue font-semibold">3.
                                </span>&nbsp;<span className="font-semibold">Flexible Learning</span>: Access our 
                            courses anytime, anywhere, and learn at your own pace.
                        </li>
                        <li className="text-[15px] font-EncodeSans">
                            <span className="text-primaryBlue font-semibold">4.
                                </span>&nbsp;<span className="font-semibold">Supportive Community</span>: Join a 
                            vibrant community of learners and mentors who are always ready to collaborate and help.
                        </li>
                </ul>
            </div>
            {/* What We Believe Section */}
            <div className="w-full flexColCenter my-10">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            What We Believe
                        </div>
                    </div>
                    <div className="flexColCenter w-full mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <div className="w-[96%] flexCenter mt-4 border border-secondaryBlue rounded-xl p-4 bg-slate-100">
                    <div className="text-[15px] font-EncodeSans">
                        &nbsp;&nbsp;&nbsp;&nbsp;We believe that programming is more than just writing 
                        code, it&apos;s about solving problems, creating opportunities, and turning ideas 
                        into reality. At Shosan Code Hub, we are committed to helping you achieve 
                        your goals and unlocking your full potential in the tech industry. <br/>Start your 
                        coding journey with us today and become part of a future shaped by innovation!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection

