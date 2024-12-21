import { useState, useContext } from "react";
import { Logo } from "../assets";
import Button from "./Button";
import { MainContext } from "../context/mainContext";



const ContactUsSection = () => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    });
    const { name, email, number, subject, message } = formData;

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted these data from ${formData.name}`);
        setFormData({ ...formData, name: "", email: "", number: "", subject: "", message: "" });
    }

    return (
        <section className="w-full flexAround">
            <div className="sm:w-[40%] w-[90%] flexColStart mt-8">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            Have questions?
                        </div>
                    </div>
                    <div className="flexColCenter w-[80%] mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <div className="w-[60%] flexCenter mt-4 border border-secondaryBlue rounded-xl p-6 bg-slate-100">
                    <div className="text-[15px] font-EncodeSans">
                        Do you have more questions to enquire of us or you need more information on certain things? 
                        Feel free to reach out to us at the channels below. We&apos;d love to hear from you!
                    </div>
                </div>
            </div>
            <div className="w-[50%] mt-8 flexColCenter">
                <form 
                    onSubmit={handleSubmit} 
                    className="w-full flexColCenter bg-slate-200 py-4 rounded-[10px]"
                >
                    <div className="font-semibold text-secondaryBlue text-[20px]">
                        Contact Us
                    </div>
                    <div className="w-[80%] flexColCenter mt-6">
                        <input 
                            name="name" 
                            type="text"
                            required
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your Full name"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] 
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="w-[80%] flexColCenter mt-6">
                        <input 
                            name="email" 
                            type="email"
                            required
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your Email Address"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] 
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="w-[80%] flexColCenter mt-6">
                        <input 
                            name="number" 
                            type="text"
                            required
                            value={number}
                            onChange={handleChange}
                            placeholder="Enter your Phone Number"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] 
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="w-[80%] flexColCenter mt-6">
                        <input 
                            name="subject"
                            type="text" 
                            value={subject}
                            onChange={handleChange}
                            placeholder="Message Title"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] 
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="w-[80%] flexColCenter mt-6">
                        <textarea 
                            name="message"
                            type="text" 
                            value={message}
                            onChange={handleChange}
                            placeholder="Type your Message here"
                            className="w-[90%] h-[70px] rounded-[10px] pl-2 border-[1px] 
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="w-full mt-8 flexCenter">
                        <Button 
                            btnGradColor1={lightBlue}
                            btnGradColor2={darkBlue}
                            buttonType="submit"
                            buttonText={"Submit"} 
                            className={`w-[60%] h-[40px] rounded-[20px] text-[16px] 
                            shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUsSection


