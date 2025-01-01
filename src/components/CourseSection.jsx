import { useNavigate } from "react-router-dom";
import { lessons } from "../utils/data";
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";



const CourseSection = () => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const navigate = useNavigate();
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [schedule, setSchedule] = useState({});

    const handleCourseSelection = (course) => {
        if (selectedCourses.includes(course.id)) {
            setSelectedCourses(selectedCourses.filter((id) => id !== course.id));
            const updatedSchedule = { ...schedule };
            delete updatedSchedule[course.id];
            setSchedule(updatedSchedule);
        } else {
            setSelectedCourses([...selectedCourses, course.id]);
            setSchedule({ ...schedule, [course.id]: course.time });
        }
    };
    
    const isSelected = (courseId) => selectedCourses.includes(courseId);


    return (
        <section className="flexColCenter w-full h-[500px] bg-slate-300">
            <div className="w-full mb-2 flexColCenter">
                <ul className="grid grid-cols-3 gap-4 bg-white rounded-lg py-8 px-6">
                    {lessons.map((course) => (
                        <li key={course.id} style={{ marginBottom: '10px' }}>
                            <label className="text-slate-900 text-[16px] font-EncodeSans font-medium">
                                <input
                                    type="checkbox"
                                    className="mr-2 ring-1 ring-secondaryBlue animate-pulse"
                                    checked={isSelected(course.id)}
                                    onChange={() => handleCourseSelection(course)}
                                />
                                {course.name} 
                                :
                                (<span className="font-sans italic text-secondaryBlue text-[14px]">
                                    {course.time}
                                </span>)
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="w-full flexColCenter my-4">
                    <h2 className="text-secondaryBlue text-[20px] text-center">
                        Your Schedule
                    </h2>
                    {selectedCourses.length === 0 ? (
                    <p>No courses selected yet.</p>
                    ) : (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {selectedCourses.map((courseId) => (
                        <li key={courseId}>
                            {lessons.find((course) => course.id === courseId)?.name}: {schedule[courseId]}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
            <Button 
                btnGradColor1={lightBlue}
                btnGradColor2={darkBlue}
                buttonText={"Back"} 
                onClick={() => navigate(-1)}
                className={`w-[100px] h-[30px] rounded-[16px] text-[16px] mt-1
                shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
            />
        </section>
    )
}

export default CourseSection

