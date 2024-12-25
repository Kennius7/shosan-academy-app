import { useContext } from "react";
import { MainContext } from "../context/mainContext";



const SignUp = () => {
    const { setLoginState } = useContext(MainContext);
    const handleSignin = () => {
        alert("Logged in to your account...");
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
                    className="h-10 outline-none bg-slate-900/10 rounded-xl pl-5 w-full" />
                <input 
                    type="password" 
                    placeholder="Your Password" 
                    className="h-10 outline-none bg-slate-900/10 rounded-xl pl-5 w-full" />
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
            {/* <div className="flex flex-row justify-start sm:items-center items-start sm:mt-0 mt-1">
                <input type="checkbox" className="sm:mt-0 mt-1" onClick={() => setIsChecked(!isChecked)} />
                <p className="text-slate-900 sm:text-[14px] text-[12px] pl-2 italic">
                    By continuing, I agree to the terms of use and privacy policy of Shosan Code Hub.
                </p>
            </div> */}
        </div>
    )
}

export default SignUp;
