import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";



const SignUp = () => {
    const { setLoginState, lightBlue, darkBlue, yellow } = useContext(MainContext);
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signUpText, setSignUpText] = useState("Sign Up");

    // const devApiSignUpUrl = "http://localhost:3000/api/signup";
    const apiSignUpUrl = import.meta.env.VITE_API_SIGN_UP_URL;

    const [signUpFormData, setSignUpFormData] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        batchNum: "001",
        courseDetails: "None",
        courseProgress: 0,
    });
    const { name, email, number, password, batchNum, courseDetails, courseProgress } = signUpFormData;

    const handleChange = (e) => setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });

    const handleSignUp = async() => {
        setIsLoading(true);
        setSignUpText("Signing Up...");
        if ( name.trim() && email.trim() && number.trim() && password.trim()) {
            try {
                const response = await axios.post(
                    apiSignUpUrl, 
                    { name, email, number, password, batchNum, courseDetails, courseProgress }, 
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: false,
                    }
                );
                const message = response?.data?.message || "Signed in successfully!";
                toast(message, { type: "success" });
                toast("Please sign in...", { type: "success" });
                setSignUpFormData({ ...signUpFormData, name: "", email: "", number: "", password: "", batchNum: "001", courseDetails: "None", courseProgress: 0, });
                setSignUpText("Signed Up!");
                setTimeout(() => setSignUpText("Sign Up"), 2000);
                setTimeout(() => setLoginState(false), 3000);
            } catch (error) {
                console.error("Error signing in:", error);
                const errorMessage = error?.response?.data?.error;
                const errMessage = errorMessage === "Error: Firebase: Error (auth/email-already-in-use)." 
                ? "Email has been used before." : errorMessage === "Error: Firebase: Error (auth/network-request-failed)." 
                ? "Network error. Check you network." : "An unexpected error occurred."
                toast(errMessage, { type: "error" });
                setSignUpText("Sign Up Failed!");
                setTimeout(() => setSignUpText("Sign Up"), 2000);
            } finally {
                setIsLoading(false);
            }
        } else {
            // Handle empty email or password
            toast("Please provide name, number, email and password.", { type: "warning" });
            setIsLoading(false);
            setSignUpText("Sign Up Failed!");
            setTimeout(() => setSignUpText("Sign Up"), 2000);
        }
    }

    return (
        <div className="sm:w-[600px] w-[98%] sm:h-[450px] h-[430px] m-auto bg-white py-4 sm:px-14 
            px-4 sm:rounded-lg rounded-xl">
            <h3 className="ss:text-[25px] text-[20px] font-semibold text-secondaryBlue">
                Sign Up
            </h3>
            <div className="flex flex-col gap-4 sm:mt-6 mt-5">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                <input 
                    type="number" 
                    placeholder="Your Phone Number" 
                    name="number"
                    value={number}
                    onChange={handleChange}
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                <div className="relative">
                    <input 
                        type={!isVisible ? "password" : "text"} 
                        placeholder="Your Password" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                    <div 
                        onClick={() => setIsVisible(!isVisible)} 
                        className={`sm:w-5 sm:h-5 w-4 h-4 rounded-full absolute z-[2] top-2 
                        sm:right-1 right-2 cursor-pointer
                        ${!isVisible ? "bg-secondaryBlue" : "bg-secondaryYellow"}`}></div>
                </div>
            </div>
            <Button 
                btnGradColor1={lightBlue}
                btnGradColor2={darkBlue}
                buttonText={signUpText} 
                isLoading={isLoading}
                loaderColor={yellow}
                disabled={!isChecked}
                onClick={handleSignUp}
                className={`w-full h-9 rounded-[20px] text-[16px] shadow-[0px_0px_5px_0px_#0b1f139c] 
                font-semibold sm:mt-8 mt-10 flexCenter ${!isChecked ? "text-slate-400" : "text-white"}`} 
            />
            <p className="text-slate-900 font-semibold sm:mt-6 mt-3 text-[14px]">Already have an account?&nbsp;
                <span 
                    onClick={() => setLoginState(false)} 
                    className="text-red-900 underline cursor-pointer">
                    Sign In
                </span>
            </p>
            <div className="flex flex-row justify-start items-start sm:mt-0 mt-1">
                <input type="checkbox" className="mt-1" onClick={() => setIsChecked(!isChecked)} />
                <p className="text-slate-900 sm:text-[14px] text-[12px] pl-2 italic">
                    By continuing, I agree to the terms of use and privacy policy of Shosan Code Hub.
                </p>
            </div>
        </div>
    )
}

export default SignUp;
