import { useState, useContext } from "react";
import { Logo } from "../assets";
import Button from "./Button";
import { MainContext } from "../context/mainContext";
import axios from "axios";
import { toast } from "react-toastify";



const ContactUsSection = () => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const [buttonText, setButtonText] = useState("Submit");
    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    });
    const { name, email, number, subject, message } = formData;

    // const devApiEmailUrl = "http://localhost:3000/api/email";
    const apiEmailUrl = import.meta.env.VITE_API_EMAIL_URL;

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Submitting...");
        setIsDisabled(true);
        try {
            const emailData = await axios.post(apiEmailUrl, formData);
            console.log(emailData.data.message);
            toast(`${emailData.data.message}`, { type: "success" });
            setFormData({ ...formData, name: "", email: "", number: "", subject: "", message: "" });
            setTimeout(() => setButtonText("Submitted!"), 2000);
            setTimeout(() => {
                setButtonText("Submit");
                setIsDisabled(false);
            }, 4000);
        } catch (error) {
            toast(`${error.message}`, { type: "error" });
            console.log(error.message);
            setTimeout(() => setButtonText("Submit Failed!"), 1000);
            setTimeout(() => {
                setButtonText("Submit");
                setIsDisabled(false);
            }, 3000);
        }
    }

    return (
        <section className="w-full flex sm:flex-row flex-col sm:justify-around justify-center 
            sm:items-start items-center my-4">
            <div className="sm:w-[40%] w-[90%] flexColStart sm:mt-14 mt-8">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            Have questions?
                        </div>
                    </div>
                    <div className="flexColCenter sm:w-[80%] w-[95%] mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <div className="sm:w-[60%] w-[96%] flexCenter mt-4 border border-secondaryBlue 
                    rounded-xl p-6 bg-slate-100">
                    <div className="text-[15px] font-EncodeSans">
                        Do you have more questions to enquire of us or you need more information on certain things? 
                        Feel free to reach out to us and fill the form below. We&apos;d love to hear from you!
                    </div>
                </div>
            </div>
            <div className="sm:w-[50%] w-[90%] mt-8 flexColCenter">
                <form 
                    onSubmit={handleSubmit} 
                    className="w-full flexColCenter bg-slate-200 sm:py-10 py-4 rounded-[10px]"
                >
                    <div className="font-semibold text-secondaryBlue sm:text-[25px] text-[22px] w-[60%] h-[35px 
                        rounded-[10px] text-center flexCenter"
                    >
                        Contact Us
                    </div>
                    <div className="sm:w-[80%] w-[96%] flexColCenter sm:mt-7 mt-4">
                        <input 
                            name="name" 
                            type="text"
                            required
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your Full name"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] transition-all duration-1000
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="sm:w-[80%] w-[96%] flexColCenter sm:mt-6 mt-4">
                        <input 
                            name="email" 
                            type="email"
                            required
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your Email Address"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] transition-all duration-1000
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="sm:w-[80%] w-[96%] flexColCenter sm:mt-6 mt-4">
                        <input 
                            name="number" 
                            type="text"
                            required
                            value={number}
                            onChange={handleChange}
                            placeholder="Enter your Phone Number"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] transition-all duration-1000
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="sm:w-[80%] w-[96%] flexColCenter sm:mt-6 mt-4">
                        <input 
                            name="subject"
                            type="text" 
                            value={subject}
                            onChange={handleChange}
                            placeholder="Message Title"
                            className="w-[90%] h-[45px] rounded-[10px] pl-2 border-[1px] transition-all duration-1000
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue"
                        />
                    </div>
                    <div className="sm:w-[80%] w-[96%] flexColCenter sm:mt-6 mt-4">
                        <textarea 
                            name="message"
                            type="text" 
                            value={message}
                            onChange={handleChange}
                            placeholder="Type your Message here"
                            className="w-[90%] h-[100px] rounded-[10px] pl-2 border-[1px] transition-all duration-1000
                            focus:shadow-[0px_0px_5px_0px_#000205] outline-none focus:border-secondaryBlue p-2"
                        />
                    </div>
                    <div className="w-full mt-8 flexCenter">
                        <Button 
                            btnGradColor1={!isDisabled ? lightBlue : darkBlue}
                            btnGradColor2={!isDisabled ? darkBlue : "#000"}
                            buttonType="submit"
                            disabled={isDisabled}
                            buttonText={buttonText} 
                            className={`w-[60%] h-[40px] rounded-[20px] text-[16px] 
                            shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold 
                            ${isDisabled ? "text-dimWhite" : "text-secondaryYellow"}`} 
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUsSection


