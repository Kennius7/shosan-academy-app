import { courses } from "../utils/data";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";



function CourseList() {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const navigate = useNavigate();

    return (
        <section className="flex flex-col md:justify-center justify-start items-center 
            bg-slate-100 w-full">
            <div className="font-EncodeSans font-semibold sm:text-center text-start text-slate-700 sm:w-[95%] 
                xs:w-[80%] w-[88%] sm:text-[30px] xs:text-[25px] text-[18px] sm:mb-[20px] 
                xs:mb-[30px] mb-[20px] sm:mt-[60px] mt-[40px]">
                Courses Information
                <hr className="bg-black w-full h-[3px] sm:mt-3 mt-1"/>
            </div>

            <div className="flex justify-center items-center w-full mb-[30px]">
                <ul className="flex sm:flex-wrap flex-nowrap sm:flex-row flex-col justify-between 
                    sm:items-start items-center xs:w-[90%] w-[98%]">
                    {
                        courses.map((course) => (
                            <li key={course.id} 
                                className="flex flex-col justify-center items-start md:w-[44%] sm:w-[49%] 
                                w-[98%] xs:mb-[20px] mb-[30px]">
                                <div className="w-full flexStart">
                                    <img 
                                        src={course.picsRep} 
                                        alt={course.alt} 
                                        className="w-[50px] h-[50px] sm:m-3 m-1" />
                                    <div className="font-semibold md:text-[22px] sm:text-[20px] sm:pl-2 pl-1
                                        xs:text-[19px] text-[17px]">
                                        {course.name}
                                    </div>
                                </div>
                                <div className="flexStart w-full sm:pl-6 pl-3">
                                    <div className="italic sm:text-[18px] text-[16px]">
                                        {course.description}
                                    </div>
                                </div>
                                <div className="w-full flexStart sm:px-6 px-3 mt-4">
                                    <Button 
                                        btnGradColor1={lightBlue}
                                        btnGradColor2={darkBlue}
                                        buttonText={"Enrol"} 
                                        onClick={() => navigate(`/classes/${course.id}`)}
                                        className={`w-[100px] h-[30px] rounded-[16px] text-[16px] 
                                        shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
                                    />
                                </div>
                                <div className="flexColCenter w-full mt-3">
                                    <hr className="border-[1px] border-black/30 w-full mb-[2px]" />
                                    <hr className="border-[1px] border-black/30 w-full mb-[2px]" />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <table className="sm:w-[95%] xs:w-[98%] w-[99%]">
                <thead className="w-full">
                    <tr className="bg-blue-100 md:h-[60px] sm:h-[50px] xs:h-[40px] h-[28px]">
                        <th className="font-semibold text-start md:text-[20px] sm:text-[17px] 
                            xs:text-[12px] text-[10px]">S/N</th>
                        <th className="font-semibold text-start md:text-[22px] sm:text-[19px] 
                            xs:text-[13px] text-[11px] xs:pl-0 pl-[6px]">Course</th>
                        <th className="font-semibold text-start md:text-[22px] sm:text-[19px] 
                            xs:text-[13px] text-[10px]">Old Price</th>
                        <th className="font-semibold text-start md:text-[22px] sm:text-[19px] 
                            xs:text-[13px] text-[9px]">New Price</th>
                        <th className="font-semibold text-start md:text-[22px] sm:text-[19px] 
                            xs:text-[13px] text-[9px]">*Duration</th>
                    </tr>
                </thead>
                <tbody className="w-full bg-slate-100">
                    {courses.map((course) => (
                        <tr 
                            key={course.id} 
                            className={`bg-yellow-100 sm:h-[50px] xs:h-[30px] h-[25px] border-[1px] border-slate-300
                                ${course.id === course.length - 1 
                                    ? "mb-0" 
                                    : "sm:mb-[20px] xs:mb-[10px] mb-[20px]"}`}>

                            <td className="font-poppins text-start md:text-[20px] sm:text-[17px] xs:text-[12px] text-[12px] 
                                xs:w-[5%] w-[3%] sm:pl-[10px] xs:pl-[2px] pl-[1px]">
                                {course.id + 1}
                            </td>
                            <td className="text-start md:text-[20px] sm:text-[16px] xs:text-[13px] text-[11px] 
                                xs:w-[50%] w-[48%]">
                                {course.name}
                            </td>
                            <td className="font-mono text-start md:text-[20px] sm:text-[16px] xs:text-[14px] 
                                text-[11px] xs:w-[15%] w-[18%] line-through italic">
                                N{course.formerPrice}
                            </td>
                            <td className="font-mono text-start md:text-[20px] sm:text-[16px] xs:text-[14px] 
                                text-[11px] xs:w-[15%] w-[16%] italic">
                                N{course.price}
                            </td>
                            <td className="font-poppins text-start md:text-[20px] sm:text-[16px] 
                                xs:text-[13px] text-[10px] xs:w-[15%] w-[16%]">
                                {course.duration}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-start items-center sm:mt-[20px] xs:mt-[5px] w-[95%] 
                xs:h-[40px] h-[90px]">
                <div className="font-sans italic text-start sm:font-semibold font-normal w-[94%] sm:text-[16px] 
                    xs:text-[12px] text-[11px]">
                    <span className="font-bold sm:text-[22px] xs:text-[18px] text-[15px]">*</span>
                    The duration is based on a 6 hour weekly schedule, either during the weekdays 
                    or the weekend. You can freely negotiate a personalized schedule just for you.
                </div>
            </div>
        </section>
    )
}

export default CourseList


