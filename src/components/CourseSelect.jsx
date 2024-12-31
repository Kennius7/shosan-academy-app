import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../utils/data";
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";



const CourseSelect = () => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const navigate = useNavigate();
    const { courseId } = useParams();
    const Course = courses.find(p => p.id === Number(courseId));
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [schedule, setSchedule] = useState({});

    const lessons = [
        { id: 1, name: 'Mathematics 101', time: 'Monday 9:00 AM - 11:00 AM' },
        { id: 2, name: 'Physics 201', time: 'Tuesday 10:00 AM - 12:00 PM' },
        { id: 3, name: 'Chemistry 301', time: 'Wednesday 1:00 PM - 3:00 PM' },
        { id: 4, name: 'Biology 401', time: 'Thursday 2:00 PM - 4:00 PM' },
        { id: 5, name: 'Computer Science 101', time: 'Friday 11:00 AM - 1:00 PM' },
    ];

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
        <section className="flexColCenter w-full h-dvh">
            <div className="w-[96%] text-center text-[25px] text-secondaryBlue mb-4">
                { Course.name }
            </div>
            <div className="w-full mb-10 flexColCenter">
                <div className="w-full flexCenter mb-4">
                    <h2 className="text-secondaryBlue text-[20px] text-center">
                        Available Courses
                    </h2>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                {lessons.map((course) => (
                    <li key={course.id} style={{ marginBottom: '10px' }}>
                        <label>
                            <input
                                type="checkbox"
                                className="mr-2 ring-1 ring-secondaryBlue animate-pulse"
                                checked={isSelected(course.id)}
                                onChange={() => handleCourseSelection(course)}
                            />
                            {course.name} ==&gt; ({course.time})
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
                className={`w-[100px] h-[30px] rounded-[16px] text-[16px] mt-10
                shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
            />
        </section>
    )
}

export default CourseSelect

