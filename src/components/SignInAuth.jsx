/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";



const SignUp = () => {
    const navigate = useNavigate();
    const [ currentlyLoggedInUser ] = useAuthState(auth);
    const [ user ] = useAuthState(auth);
    const { setLoginState, setIsActualLoggedIn } = useContext(MainContext);
    const [isVisible, setIsVisible] = useState(false);
    const [signInFormData, setSignInFormData] = useState({ email: "", password: ""});
    const { email, password } = signInFormData;
    const handleChange = (e) => setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });

    const handleSignin = async() => {
        console.log("Current User Data: ", currentlyLoggedInUser);

        if (user?.email === currentlyLoggedInUser?.email) {
            alert(`${currentlyLoggedInUser?.displayName?.split(" ")[0]} is already logged in...`);
        };

        if (email !== "" || password !== "") {
            try {
                const newUser = await signInWithEmailAndPassword(auth, email, password);
                alert(`Welcome, ${newUser?.user?.displayName}`);
                setSignInFormData({ ...signInFormData, email: "", password: "" });
                // setIsActualLoggedIn(true);

                setTimeout(() => {
                    navigate("/profile");
                }, 2000);
            } catch (error) {
                if (error.code === "auth/user-not-found") {
                    console.error(error.code);
                    alert(`Error: ${error.code}`)
                } else if (error.code === "auth/wrong-password") {
                    console.error(error.code);
                    alert(`Error: ${error.code}`)
                } else {
                    console.error(error.code);
                    alert(`Error: ${error.code}`)
                }
            }
        }
    }


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
            <button 
                onClick={handleSignin} 
                className="bg-slate-800 rounded-xl w-full h-10 sm:mt-16 mt-10 text-white font-semibold">
                Continue
            </button>
            <p className="text-secondaryBlue font-semibold sm:mt-4 mt-3 text-[14px]">
                Don&apos;t have an account?&nbsp;
                <span 
                    onClick={() => setLoginState(false)} 
                    className="text-red-900 underline cursor-pointer">
                    Sign Up
                </span>
            </p>
        </div>
    )
}

export default SignUp;
