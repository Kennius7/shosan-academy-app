import { useContext } from "react";
import { MainContext } from "../context/mainContext";



const SignUp = () => {

    const { setLoginState } = useContext(MainContext);

    return (
        <div className="w-[600px] h-[430px] m-auto bg-white py-10 px-14">
            <h3 className="ss:text-[25px] text-[20px] font-semibold text-secondaryBlue">
                Sign Up
            </h3>
            <div className="flex flex-col gap-4 mt-8">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
                <input 
                    type="password" 
                    placeholder="Your Password" 
                    className="h-9 outline-none bg-slate-900/5 rounded-xl pl-5 w-full" />
            </div>
            <button className="bg-slate-800 rounded-xl w-full h-9 mt-10 text-white font-semibold">
                Continue
            </button>
            <p className="text-slate-900 font-semibold mt-8 text-[14px]">Already have an account?&nbsp;
                <span onClick={() => setLoginState(true)} className="text-red-900 underline cursor-pointer">Sign In</span>
            </p>
            <div className="flex flex-row justify-start items-center mt-0">
                <input type="checkbox" />
                <p className="text-slate-900 text-[14px] pl-2 italic">
                    By continuing, I agree to the terms of use and privacy policy
                </p>
            </div>
        </div>
    )
}

export default SignUp;
