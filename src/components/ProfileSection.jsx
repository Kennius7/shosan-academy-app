import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/mainContext";
import { PiPencil } from "react-icons/pi";
import CircularProgressBar from "../components/CircularProgressBar";
import { selectCourses } from "../utils/data";
import Button from "./Button";



const ProfileSection = () => {
    const { setIsEditProfile, isEditProfile, profileFormData, setProfileFormData, darkBlue } = useContext(MainContext);

    const [profileData, setProfileData] = useState({
        name: profileFormData.name,
        email: profileFormData.email,
        number: profileFormData.number,
        batchNum: profileFormData.batchNum,
        courseDetails: profileFormData.courseDetails,
        courseProgress: profileFormData.courseProgress,
    });

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const editName = () => {
        setIsEditProfile({ ...isEditProfile, name: !isEditProfile.name });
        setProfileFormData({ ...profileFormData, name: profileData.name });
    };

    const editEmail = () => {
        setIsEditProfile({ ...isEditProfile, email: !isEditProfile.email });
        setProfileFormData({ ...profileFormData, email: profileData.email });
    };

    const editNumber = () => {
        setIsEditProfile({ ...isEditProfile, number: !isEditProfile.number });
        setProfileFormData({ ...profileFormData, number: profileData.number });
    };

    const editCourseDetails = () => {
        setIsEditProfile({ ...isEditProfile, courseDetails: !isEditProfile.courseDetails });
        setProfileFormData({ ...profileFormData, courseDetails: profileData.courseDetails });
    };



    return (
        <section className="w-full">
            <div className="w-full h-[300px] sm:mt-10 mt-4 flexStartStart sm:px-3 px-2 relative">
                <div className="sm:w-[30%] w-full flexColCenterStart">
                    <CircularProgressBar 
                        percentage={profileData.courseProgress} 
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
                                { profileData.courseDetails }
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
                                <div className="flexBetween w-full">
                                    <input 
                                        placeholder={ profileData.name } 
                                        disabled={!isEditProfile.name}
                                        name="name"
                                        value={!isEditProfile.name ? "" : profileData.name}
                                        onChange={handleChange}
                                        onBlur={editName}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    <PiPencil 
                                        onClick={editName} 
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
                                <div className="flexBetween w-full">
                                    <input 
                                        placeholder={ profileData.email } 
                                        disabled={!isEditProfile.email}
                                        name="email"
                                        value={!isEditProfile.email ? "" : profileData.email}
                                        onChange={handleChange}
                                        onBlur={editEmail}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    <PiPencil 
                                        onClick={editEmail} 
                                        size={20} 
                                        color={isEditProfile.email ? "#ff0101" : "#000"} 
                                        style={{ width: 20, height: 20, opacity: 0.7}} 
                                        className={`cursor-pointer`}
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                            <li className="flexColCenterStart">
                                <div className="text-black text-[18px]">
                                    Phone Number
                                </div>
                                <div className="flexBetween w-full">
                                    <input 
                                        placeholder={ profileData.number } 
                                        disabled={!isEditProfile.number}
                                        name="number"
                                        value={!isEditProfile.number ? "" : profileData.number}
                                        onChange={handleChange}
                                        onBlur={editNumber}
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                    <PiPencil 
                                        onClick={editNumber} 
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
                                        placeholder={ profileData.batchNum } 
                                        disabled={ !isEditProfile.batchNum }
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
                                <div className="flexBetween w-full">
                                    <select
                                        name="courseDetails"
                                        value={profileData.courseDetails}
                                        onChange={handleChange}
                                        onBlur={editCourseDetails}
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
                                        onClick={editCourseDetails} 
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
                                        placeholder={ profileData.courseProgress + "%" } 
                                        disabled={ !isEditProfile.courseProgress }
                                        className="placeholder:text-secondaryBlue placeholder:text-[16px] 
                                        placeholder:font-sans placeholder:italic bg-transparent outline-none 
                                        cursor-pointer flex-1 text-[15px]"
                                    />
                                </div>
                                <hr className="border-[1px] border-black/30 w-full" />
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"} className="sm:my-6 my-4">
                        <Button 
                            btnGradColor1={darkBlue}
                            btnGradColor2={"#000"}
                            buttonText={"Logout"} 
                            className={`w-[150px] h-[40px] rounded-[20px] text-[16px] text-secondaryYellow 
                            shadow-[0px_0px_5px_0px_#0b1f139c] font-medium`} 
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection


