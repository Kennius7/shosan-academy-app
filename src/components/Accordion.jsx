/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import CourseDropdown from "./CourseDropdown";



const Accordion = ({ 
    items: { courseSelect }, 
    width, 
    lessonData,
    courseState, 
    setCourseState, 
    scheduleState, 
    setScheduleState, 
    isSelected 
}) => {
    console.log("Items:>>>", courseSelect);
    console.log("Width Value:>>>", width);
    const [openIndex, setOpenIndex] = useState(null);
    const accordionRef = useRef(null);
    const handleToggle = index => setOpenIndex(openIndex === index ? null : index);
    const calcHeight = (index) => { return openIndex === index ? accordionRef.current?.scrollHeight || 0 : 0 };


    return (
        <div style={{ width: width }} className={`bg-slate-300`}>
            <div 
                key={courseSelect.id} 
                className="w-full flexColCenter"
            >
                <div 
                    onClick={() => handleToggle(courseSelect.id)} 
                    className="w-full h-[60px] flexBetween border-2 px-3 cursor-pointer"
                >
                    <button className="font-semibold w-[97%] text-left">
                        {courseSelect.name}
                    </button>
                    {
                        openIndex === courseSelect.id 
                        ? <BiMinus size={24} />
                        : <BiPlus size={24} />
                    }
                </div>
                <div 
                    ref={ accordionRef } 
                    style={{ maxHeight: `${calcHeight(courseSelect.id)}px` }}
                    className={`w-full overflow-hidden transition-all duration-500`}
                >
                    <p className="w-full px-4 py-2">
                        {courseSelect.description}
                    </p>
                    <CourseDropdown 
                        lessonData={ lessonData } 
                        courseState={ courseState } 
                        setCourseState={ setCourseState } 
                        scheduleState={ scheduleState } 
                        setScheduleState={ setScheduleState } 
                        isSelected={ isSelected } 
                    />
                </div>
            </div>
        </div>
    );
};


export default Accordion;
