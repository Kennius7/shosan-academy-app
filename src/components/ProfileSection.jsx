/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/mainContext";
import { PiPencil } from "react-icons/pi";
import CircularProgressBar from "../components/CircularProgressBar";
import { selectCourses } from "../utils/data";
import Button from "./Button";
import { db, auth } from "../../FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import axios from "axios";



const ProfileSection = () => {
    const navigate = useNavigate();
    const { 
        darkBlue, lightBlue, yellow, profileFormData, setProfileFormData, setSignInToken, signInToken 
    } = useContext(MainContext);
    const [isLoading, setIsLoading] = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const courseRef = useRef(null);

    const [isEditProfile, setIsEditProfile] = useState({
        name: false,
        email: false,
        number: false,
        courseDetails: false,
    });

    const { name, email, number, batchNum, courseDetails, courseProgress, id } = profileFormData;

    const devApiFetchProfileUrl = "http://localhost:3000/api/fetchprofile";
    const apiFetchProfileUrl = import.meta.env.VITE_API_FETCH_PROFILE_URL;

    const handleChange = (e) => {
        setProfileFormData({
            ...profileFormData,
            [e.target.name]: e.target.value,
        });
    };

    const editField = async (ref) => {
        console.log("Ref Values Check:", ref.current.firstChild.placeholder);
        console.log("Doc Id: ", id);

        if (ref.current && ref.current.firstChild.name === "name") {
            setIsEditProfile({ ...isEditProfile, name: !isEditProfile.name });
            setProfileFormData({ ...profileFormData, name: name });
        }
        if (ref.current && ref.current.firstChild.name === "number") {
            setIsEditProfile({ ...isEditProfile, number: !isEditProfile.number });
            setProfileFormData({ ...profileFormData, number: number });
        }
        if (ref.current && ref.current.firstChild.name === "courseDetails") {
            setIsEditProfile({ ...isEditProfile, courseDetails: !isEditProfile.courseDetails });
            setProfileFormData({ ...profileFormData, courseDetails: courseDetails });
        }
    }


    const handleLogout = () => {
        setIsLoading(true);
        setSignInToken("");
        toast(`Logged out, ${name.split(" ")[0]}`, { type: "success" });
        setProfileFormData({ 
            ...profileFormData, 
            name: "Guest",
            email: "guest@mail.com",
            number: "10000100001",
            batchNum: "000",
            courseDetails: "None",
            courseProgress: 3, 
        });
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }, 1000);
    };

    const handleSaveData = async () => {
        
        try {
            const dataFetch = await axios.get(apiFetchProfileUrl, {
                headers: { 
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${signInToken}`,
                },
            });
            const FetchData = dataFetch.data.data;
            const docRef = doc(db, "User_Data", id);

            if (FetchData.name !== name) {
                await updateDoc(docRef, { name: name });
                console.log("Name updated successfully!");
                toast("Name updated successfully!", { type: "success" } );
            }

            if (FetchData.number !== number) {
                await updateDoc(docRef, { number: number });
                console.log("Number updated successfully!");
                toast("Number updated successfully!", { type: "success" } );
            }

            if (FetchData.courseDetails !== courseDetails) {
                await updateDoc(docRef, { courseDetails: courseDetails });
                console.log("Course Details updated successfully!");
                toast("Course Details updated successfully!", { type: "success" } );
            }

            if (FetchData.name === name) {
                console.log("No changes made to your name!");
                toast("No changes made to your name!", { type: "warning" } );
            }

            if (FetchData.number === number) {
                console.log("No changes made to your number!");
                toast("No changes made to your number!", { type: "warning" } );
            }

            if (FetchData.courseDetails === courseDetails) {
                console.log("No changes made to your course!");
                toast("No changes made to your course!", { type: "warning" } );
            }
        } catch (error) {
            console.error(error);
            toast(`Error saving your data: ${error.message}`, { type: "error" } );
        }
    }



    return (
        <section className="w-full">
            <div className="w-full h-[300px] sm:mt-10 mt-4 flexStartStart sm:px-3 px-2 relative">
                <div className="sm:w-[30%] w-full flexColCenterStart">
                    <CircularProgressBar 
                        percentage={courseProgress} 
                        radius={
                            window.innerWidth > 768 ? 100 
                            : window.innerWidth < 768 
                            && window.innerWidth > 480 ? 75 : 55 
                        } 
                        strokeWidth={ window.innerWidth > 480 ? 8 : 5 } 
                        radiusOffset={8} 
                        textSize={18} 
                        textColor="white" className={`bg-secondaryBlue`}
                    />
                    <div className="w-full h-[40px] mt-4 flexColCenterStart">
                        <p className="text-secondaryBlue sm:text-[25px] text-[18px] font-semibold 
                            text-start leading-[28px]">
                            Course completion
                        </p>
                        <p className="font-sans text-black sm:text-[14px] text-[12px] sm:leading-[28px] 
                            leading-[14px]">
                            Course Title:&nbsp;
                            <span className="font-sans text-secondaryBlue sm:text-[14px] text-[12px] 
                                sm:leading-[28px] leading-[14px]">
                                { courseDetails }
                            </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-[60%] w-[96%] absolute sm:-top-32 top-[210px] sm:right-32 right-2 flexColCenter">
                    <div className="w-full sm:h-[350px] h-[550px] rounded-2xl bg-slate-200 flexColStartCenter">
                        <div className="text-secondaryBlue text-[25px] mt-4">
                            Profile Section
                        </div>
                        <hr className="border-[1px] border-black/30 sm:w-[50%] w-[70%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 sm:w-[30%] w-[55%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 sm:w-[20%] w-[35%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 sm:w-[10%] w-[20%] mb-[1px]" />

                        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-10 w-full px-4">
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Full Name
                                </div>
                                <div ref={nameRef} className="flexBetween w-full">
                                    <input 
                                        placeholder={ name } 
                                        disabled={!isEditProfile.name}
                                        name="name"
                                        value={!isEditProfile.name ? "" : name}
                                        onChange={handleChange}
                                        onBlur={() => editField(nameRef)}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    <PiPencil 
                                        onClick={() => editField(nameRef)} 
                                        size={20} 
                                        color={isEditProfile.name ? "#ff0101" : "#000"} 
                                        style={{ width: 20, height: 20, opacity: 0.7}} 
                                        className={`cursor-pointer`}
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Email Address
                                </div>
                                <div ref={emailRef} className="flexBetween w-full">
                                    <input 
                                        placeholder={ email } 
                                        disabled={!isEditProfile.email}
                                        name="email"
                                        value={!isEditProfile.email ? "" : email}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    {/* <PiPencil 
                                        size={20} 
                                        color={isEditProfile.email ? "#ff0101" : "#000"} 
                                        style={{ width: 20, height: 20, opacity: 0.7}} 
                                        className={`cursor-pointer`}
                                    /> */}
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Phone Number
                                </div>
                                <div ref={numberRef} className="flexBetween w-full">
                                    <input 
                                        placeholder={ number } 
                                        disabled={!isEditProfile.number}
                                        name="number"
                                        value={!isEditProfile.number ? "" : number}
                                        onChange={handleChange}
                                        onBlur={() => editField(numberRef)}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    <PiPencil 
                                        onClick={() => editField(numberRef)} 
                                        size={20} 
                                        color={isEditProfile.number ? "#ff0101" : "#000"} 
                                        style={{ width: 20, height: 20, opacity: 0.7}} 
                                        className={`cursor-pointer`}
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Batch No.
                                </div>
                                <div className="flexBetween w-full">
                                    <input 
                                        placeholder={ batchNum } 
                                        disabled={ !isEditProfile.batchNum }
                                        value={!isEditProfile.batchNum ? "" : batchNum}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Course Details
                                </div>
                                <div ref={courseRef} className="flexBetween w-full">
                                    <select
                                        name="courseDetails"
                                        value={courseDetails}
                                        onChange={handleChange}
                                        onBlur={() => editField(courseRef)}
                                        style={{ appearance: "none"}}
                                        disabled={!isEditProfile.courseDetails}
                                        className={`italic w-full text-secondaryBlue bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[16px]`}
                                    >
                                        {selectCourses.map(course => (
                                            <option 
                                                key={course.id} 
                                                value={course.name}
                                            >
                                                {course.name}
                                            </option>
                                        ))}
                                    </select>
                                    <PiPencil 
                                        onClick={() => editField(courseRef)} 
                                        size={20} 
                                        color={isEditProfile.courseDetails ? "#ff0101" : "#000"} 
                                        style={{ width: 20, height: 20, opacity: 0.7}} 
                                        className={`cursor-pointer`}
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Course Progress
                                </div>
                                <div className="flexBetween w-full">
                                    <input 
                                        placeholder={ courseProgress + "%" } 
                                        disabled={ !isEditProfile.courseProgress }
                                        value={!isEditProfile.courseProgress ? "" : courseProgress}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flexAround">
                        <div className="sm:my-6 my-4">
                            <Button 
                                btnGradColor1={lightBlue}
                                btnGradColor2={darkBlue}
                                buttonText={"Save"} 
                                onClick={handleSaveData}
                                className={`w-[130px] h-[40px] rounded-[20px] text-[16px] text-white
                                shadow-[0px_0px_5px_0px_#0b1f139c] font-medium`} 
                            />
                        </div>
                        <div className="sm:my-6 my-4">
                            <Button 
                                btnGradColor1={darkBlue}
                                btnGradColor2={"#000"}
                                buttonText={"Logout"} 
                                isLoading={isLoading}
                                loaderColor={yellow}
                                onClick={handleLogout}
                                className={`w-[130px] h-[40px] rounded-[20px] text-[16px] text-secondaryYellow 
                                shadow-[0px_0px_5px_0px_#0b1f139c] font-medium flexAround`} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection


