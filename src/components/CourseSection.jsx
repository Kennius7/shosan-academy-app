import { useNavigate } from "react-router-dom";
import { lessons } from "../utils/data";
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";
import Accordion from "./Accordion";



const CourseSection = (courseSelect) => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const navigate = useNavigate();
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [schedule, setSchedule] = useState({});

    // const handleCourseSelection = (course) => {
    //     if (selectedCourses.includes(course.id)) {
    //         setSelectedCourses(selectedCourses.filter((id) => id !== course.id));
    //         const updatedSchedule = { ...schedule };
    //         delete updatedSchedule[course.id];
    //         setSchedule(updatedSchedule);
    //     } else {
    //         setSelectedCourses([...selectedCourses, course.id]);
    //         setSchedule({ ...schedule, [course.id]: course.time });
    //     }
    // };
    
    const isSelected = (courseId) => selectedCourses.includes(courseId);


    return (
        <section className="flexColCenter w-full py-10 bg-slate-300">
            <div className="w-full mb-4 flexColCenter">
                <div className="w-full flexColCenter my-4">
                    <h2 className="text-secondaryBlue text-[22px] text-center font-semibold mb-2">
                        Completed courses
                    </h2>
                    {
                        selectedCourses.length === 0 ? (
                        <p>No courses completed yet.</p>
                        ) : selectedCourses.length === 1 ? (
                        <p>{ selectedCourses.length } course completed.</p>
                        // <ul className="">
                        //     {
                        //         selectedCourses.map((courseId) => (
                        //             <li key={courseId}>
                        //                 {lessons.find((course) => course.id === courseId)?.name}
                        //             </li>
                        //         ))
                        //     }
                        // </ul>
                        ) : <p>{ selectedCourses.length } courses completed.</p>
                    }
                </div>
                <div className="w-full flexCenter mb-2">
                    <Accordion 
                        items={courseSelect} 
                        width={ window.innerWidth > 500 ? "50%" : "90%" }
                        lessonData={ lessons }
                        courseState={ selectedCourses }
                        setCourseState={ setSelectedCourses }
                        scheduleState={ schedule }
                        setScheduleState={ setSchedule }
                        isSelected={ isSelected }
                    />
                </div>
                {/* <ul className="w-[50%] grid sm:grid-cols-3 grid-cols-1 gap-4 bg-white rounded-lg py-8 sm:px-6 px-12">
                    {lessons.map((course) => (
                        <li 
                            key={course.id} 
                            className=""
                        >
                            <label className="flex flex-row justify-start items-start">
                                <input
                                    type="checkbox"
                                    className="mr-2 ring-1 ring-secondaryBlue animate-pulse mt-[6px]"
                                    checked={isSelected(course.id)}
                                    onChange={() => handleCourseSelection(course)}
                                />
                                <div className="flexColCenterStart">
                                    <span className="font-sans italic text-slate-900 text-[16px] font-medium">
                                        {course.name}
                                    </span>
                                    <span className="font-sans italic text-secondaryBlue text-[14px]">
                                        {course.time}
                                    </span>
                                    <div className="w-[160px] flexBetween text-[12px] text-slate-700 italic mt-1">
                                        <button 
                                            className="bg-slate-100 rounded-lg ring-[1px] ring-yellow-700/20 
                                            px-1 py-[2px]">
                                            Watch video
                                        </button>
                                        <button>
                                            Mark as done
                                        </button>
                                    </div>
                                </div>
                            </label>
                        </li>
                    ))}
                </ul> */}
            </div>
            <Button 
                btnGradColor1={lightBlue}
                btnGradColor2={darkBlue}
                buttonText={"Back"} 
                onClick={() => navigate(-1)}
                className={`xs:w-[300px] w-[150px] h-[40px] rounded-[16px] text-[16px] mt-8
                shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
            />
        </section>
    )
}

export default CourseSection

