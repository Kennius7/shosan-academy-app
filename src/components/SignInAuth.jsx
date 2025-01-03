import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";



const SignUp = () => {
    const navigate = useNavigate();
    const { setLoginState, lightBlue, darkBlue, yellow } = useContext(MainContext);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signInText, setSignInText] = useState("Sign In");

    const [signInFormData, setSignInFormData] = useState({ email: "", password: ""});
    const { email, password } = signInFormData;

    // const devApiSignInUrl = "http://localhost:3000/api/signin";
    const apiSignInUrl = import.meta.env.VITE_API_SIGN_IN_URL;

    const handleChange = (e) => setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });

    const handleSignin = async () => {
        setIsLoading(true);
        setSignInText("Signing In...");
    
        if (email.trim() && password.trim()) {
            try {
                const response = await axios.post(
                    apiSignInUrl, 
                    { email, password }, 
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: false,
                    }
                );
                const fetchedToken = response?.data?.token;
                localStorage.setItem("user-token", fetchedToken);
                const message = response?.data?.message || "Signed in successfully!";
                toast(message, { type: "success" });
                setSignInFormData({ ...signInFormData, email: "", password: "" });
                setSignInText("Signed In!");
                setTimeout(() => setSignInText("Sign In"), 2000);
                setTimeout(() => navigate("/profile"), 3000);
            } catch (error) {
                console.error("Error signing in:", error);
                const errorMessage = error?.message || "An unexpected error occurred.";
                toast(`Error: ${errorMessage}`, { type: "error" });
                setSignInText("Sign In Failed!");
                setTimeout(() => setSignInText("Sign In"), 2000);
            } finally {
                setIsLoading(false);
            }
        } else {
            // Handle empty email or password
            toast("Please provide both email and password.", { type: "warning" });
            setIsLoading(false);
            setSignInText("Sign In Failed!");
            setTimeout(() => setSignInText("Sign In"), 2000);
        }
    };



    return (
        <div className="sm:w-[600px] w-[98%] sm:h-[400px] h-[340px] m-auto bg-white sm:py-10 py-8 sm:px-14 
            px-4 sm:rounded-lg rounded-xl">
            <h3 className="ss:text-[25px] text-[20px] font-semibold text-secondaryBlue">
                Sign In
            </h3>
            <div className="flex flex-col gap-4 sm:mt-8 mt-7">
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="h-10 outline-none bg-slate-900/10 rounded-xl pl-5 w-full" />
                <div className="relative">
                    <input 
                        type={!isVisible ? "password" : "text"} 
                        placeholder="Your Password" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="h-10 outline-none bg-slate-900/10 rounded-xl pl-5 w-full" />
                    <div 
                    onClick={() => setIsVisible(!isVisible)} 
                    className={`sm:w-5 sm:h-5 w-4 h-4 rounded-full absolute z-[2] top-3 
                    sm:right-1 right-2 cursor-pointer
                    ${!isVisible ? "bg-secondaryBlue" : "bg-secondaryYellow"}`}></div>
                </div>
            </div>
            <Button 
                btnGradColor1={lightBlue}
                btnGradColor2={darkBlue}
                buttonText={signInText} 
                isLoading={isLoading}
                loaderColor={yellow}
                onClick={handleSignin}
                className={`w-full h-10 rounded-[20px] text-[16px] text-white 
                shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold sm:mt-16 mt-10 flexCenter`} 
            />
            <p className="text-secondaryBlue font-semibold sm:mt-4 mt-3 text-[14px]">
                Don&apos;t have an account?&nbsp;
                <span 
                    onClick={() => setLoginState(true)} 
                    className="text-red-900 underline cursor-pointer">
                    Sign Up
                </span>
            </p>
        </div>
    )
}

export default SignUp;
