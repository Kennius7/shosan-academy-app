import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";



const SignUp = () => {
    // const [ user ] = useAuthState(auth);
    const { setLoginState } = useContext(MainContext);
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
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
    const uploadData = async() => await addDoc(
        collection(db, "User_Data"), 
        { name, email, number, password, batchNum, courseDetails, courseProgress }
    );
    const handleSignUp = async() => {
        if (name !== "" || email !== "" || number !== "" || password !== "") {
            try {
                const authInstance = getAuth();
                const newUser = await createUserWithEmailAndPassword(authInstance, email, password);
                await updateProfile(newUser.user, { displayName: name });
                console.log(newUser);
                uploadData();
                alert(`Signed Up with this data, Name: ${newUser?.user?.displayName}`);
                setSignUpFormData({ ...signUpFormData, name: "", email: "", number: "", password: "" });
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    console.log(error.code);
                    alert(`Error: ${error.code}`);
                } else {
                    console.error(error);
                    alert(`Error: ${error.code}`);
                }
            }
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
            <button 
                disabled={!isChecked} 
                onClick={handleSignUp}
                className={`bg-slate-800 rounded-xl w-full h-9 sm:mt-8 mt-10 font-semibold 
                ${!isChecked ? "text-slate-500" : "text-white"}`}>
                Continue
            </button>
            <p className="text-slate-900 font-semibold sm:mt-6 mt-3 text-[14px]">Already have an account?&nbsp;
                <span onClick={() => setLoginState(true)} className="text-red-900 underline cursor-pointer">Sign In</span>
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
