/* eslint-disable react/prop-types */
import { handleCourseSelection } from "../utils/data";

const CourseDropdown = ({ 
    lessonData, 
    courseState, 
    setCourseState, 
    scheduleState, 
    setScheduleState, 
    isSelected 
}) => {

    return (
        <ul className="w-full grid sm:grid-cols-3 grid-cols-1 xs:gap-3 gap-2 bg-white 
            rounded-lg xs:py-8 py-3 sm:px-6 px-2">
            {lessonData.map((course) => (
                <li 
                    key={course.id} 
                    className="xs:my-3 my-2"
                >
                    <div className="flex flex-row xs:justify-start justify-center items-center">
                        <label className="flex flex-row justify-start items-start">
                            <input
                                type="checkbox"
                                className="mr-2 ring-1 ring-secondaryBlue mt-[6px] w-3 h-3"
                                checked={isSelected(course.id)}
                                onChange={
                                    () => handleCourseSelection(
                                        course, courseState, setCourseState, scheduleState, setScheduleState
                                    )
                                }
                            />
                            <div className="flexColCenterStart">
                                <span className="font-sans italic text-slate-900 xs:text-[16px] 
                                    text-[18px] font-medium">
                                    {course.name}
                                </span>
                                <span className="font-sans text-secondaryBlue xs:text-[14px] text-[15px]">
                                    {course.time}
                                </span>
                                <div className="xs:w-[160px] w-[200px] flexBetween text-slate-700 italic mt-1">
                                    <button 
                                        className="bg-slate-200/30 rounded-lg ring-[1px] ring-yellow-500/10 
                                        px-1 py-[2px] xs:text-[12px] text-[14px]">
                                        Watch video
                                    </button>
                                    <button 
                                        className="bg-slate-100/30 rounded-lg ring-[1px] ring-yellow-500/10 
                                        px-1 py-[2px] xs:text-[11px] text-[14px]">
                                        Mark as done
                                    </button>
                                </div>
                            </div>
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CourseDropdown


